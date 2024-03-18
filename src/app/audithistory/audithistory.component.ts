import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuditHistoryService } from '../services/history.service';
import { HistoryAddEditComponent } from '../history-add-edit/history-add-edit.component';

@Component({
  selector: 'app-audithistory',
  templateUrl: './audithistory.component.html',
  styleUrl: './audithistory.component.css'
})
export class AudithistoryComponent {

  displayedColumns: string[] = ['dateOfAudit', 'reviewedBy', 'status', 'reviewedSection', 'comments', 'actionItem', "action"];
  historyListAll: any[] = [];
  historyList: any[] = [];
  

  constructor(private _dialog: MatDialog,private router: Router,public _audithistoryService: AuditHistoryService) {
    this.getHistoryList();
  }
 

  ngOnInit() {
    this.getHistoryList();
  }



  getHistoryList() {
    console.log(this._audithistoryService.myGlobalVariable);
    this._audithistoryService.getAllHistoryForProject(this._audithistoryService.myGlobalVariable).subscribe((res: any) => {
      console.log(res);
      this.historyListAll = res; 
      console.log(res.items);// Assuming 'items' is the array of MoM items in the response
      this.historyList = this.historyListAll; // Assuming you want to assign all items by default
    });
  }

  openAddEditForm() {
    this._dialog.open(HistoryAddEditComponent);
  }

  openEditForm(data: any) {
    this._dialog.open(HistoryAddEditComponent, {
      data,
    });
    this.getHistoryList();
  }

  deleteHistory(id: string) {
    this._audithistoryService.deleteHistory(id).subscribe((res: any) => {
      console.log(res);
      this.getHistoryList();
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
    this.router.navigate(['/stakeholder']);
  }
  navigateToversion(){
    this.router.navigate(['/versionhistory']);
  }
}
