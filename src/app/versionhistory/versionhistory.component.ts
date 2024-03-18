import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VersionHistoryService } from '../services/versionhistory.service';
import { VersionhistoryAddEditComponent } from '../versionhistory-add-edit/versionhistory-add-edit.component';

@Component({
  selector: 'app-versionhistory',
  templateUrl: './versionhistory.component.html',
  styleUrl: './versionhistory.component.css'
})


export class VersionhistoryComponent {

  displayedColumns: string[] = ['version', 'type', 'change','changeReason','createdBy','revisionDate','approvalDate','approvedBy', "action"];
  versionListAll: any[] = [];
 versionList: any[] = [];
  


  constructor(private _dialog: MatDialog,private router: Router,public _versionhistoryService: VersionHistoryService) {
    this.getVersionList();
  }
 

  ngOnInit() {
    this.getVersionList();
  }



  getVersionList() {
    console.log(this._versionhistoryService.myGlobalVariable);
    this._versionhistoryService.getAllVersionForProject(this._versionhistoryService.myGlobalVariable).subscribe((res: any) => {
      console.log(res);
      this.versionListAll = res; 
      console.log(res.items);// Assuming 'items' is the array of MoM items in the response
      this.versionList = this.versionListAll; // Assuming you want to assign all items by default
    });
  }

  openAddEditForm() {
    this._dialog.open(VersionhistoryAddEditComponent);
  }

  openEditForm(data: any) {
    console.log(data);
    this._dialog.open(VersionhistoryAddEditComponent,{
      data,

    });
    this.getVersionList();
  }

  deleteVersion(id: string) {
    this._versionhistoryService.deleteVersion(id).subscribe((res: any) => {
      console.log(res);
      this.getVersionList();
    });
  }
  navigateToteam() {
    this.router.navigate(['/approved-team']);
  }
  navigateToHome() {
    this.router.navigate(['/']);
  }
  navigateToresource() {
    this.router.navigate(['/resources']);
  }
  navigateToclientfeedback() {
    this.router.navigate(['/clientfeedback']);
  }
  navigateToprojectUpdate() {
    this.router.navigate(['/projectupdate']);
  }
  navigateToMoM() {
    this.router.navigate(['/meetingminutes']);
  }
  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
  navigateTodashboard() {
    this.router.navigate(['/dashboard']);
  }
  navigateTobudget() {
    this.router.navigate(['/projectbudget']);
  }
  navigateTorisk() {
    this.router.navigate(['/riskprofile']);
  }
  navigateToAudit(){
    this.router.navigate(['/audithistory']);
  }
  navigateToStakeholder(){
    this.router.navigate(['/satkeholder']);
  }
  navigateToversion(){
    this.router.navigate(['/versionhistory']);
  }
}
