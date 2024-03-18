import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StakeholderService } from '../services/stakeholder.service';
import { StakeholderAddEditComponent } from '../stakeholder-add-edit/stakeholder-add-edit.component';

@Component({
  selector: 'app-stakeholder',
  templateUrl: './stakeholder.component.html',
  styleUrl: './stakeholder.component.css'
})
export class StakeholderComponent {

  displayedColumns: string[] = ['title', 'name', 'contact', "action"];
  stakeholderListAll: any[] = [];
  stakeholderList: any[] = [];
  

  constructor(private _dialog: MatDialog,private router: Router,public _stakeholderService: StakeholderService) {
    this.getStakeholderList();
  }
 

  ngOnInit() {
    this.getStakeholderList();
  }



  getStakeholderList() {
    console.log(this._stakeholderService.myGlobalVariable);
    this._stakeholderService.getAllStakeholderForProject(this._stakeholderService.myGlobalVariable).subscribe((res: any) => {
      console.log(res);
      this.stakeholderListAll = res; 
      console.log(res.items);// Assuming 'items' is the array of MoM items in the response
      this.stakeholderList = this.stakeholderListAll; // Assuming you want to assign all items by default
    });
  }

  openAddEditForm() {
    this._dialog.open(StakeholderAddEditComponent);
  }

  openEditForm(data: any) {
    console.log(data);
    this._dialog.open(StakeholderAddEditComponent,{
      data,

    });
    this.getStakeholderList();
  }

  deleteStakeholder(id: string) {
    this. _stakeholderService.deleteStakeholder(id).subscribe((res: any) => {
      console.log(res);
      this.getStakeholderList();
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
}
