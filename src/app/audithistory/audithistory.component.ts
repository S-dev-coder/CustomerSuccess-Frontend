import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuditHistoryService } from '../services/history.service';
import { HistoryAddEditComponent } from '../history-add-edit/history-add-edit.component';
import { StakeholderService } from '../services/stakeholder.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-audithistory',
  templateUrl: './audithistory.component.html',
  styleUrl: './audithistory.component.css'
})
export class AudithistoryComponent {

  displayedColumns: string[] = ['dateOfAudit', 'reviewedBy', 'status', 'reviewedSection', 'comments', 'actionItem', "action"];
  historyListAll: any[] = [];
  historyList: any[] = [];
  

  constructor(private _dialog: MatDialog,private router: Router,
    public notificationService: NotificationService,
    public _audithistoryService: AuditHistoryService,

    public _stakeholderService: StakeholderService) {
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

  sendNotification(stakeholder:any) {
    return new Promise((resolve, reject) => {
        this.notificationService.sendNotification(stakeholder.contact, stakeholder.name, 'Audit history details updated.', 'http://localhost:4200')
            .subscribe(response => {
                console.log('Notification sent successfully:', response);
                resolve(response);
            }, error => {
                console.error('Failed to send notification:', error);
                reject(error);
            });
    });
}

sendNotificationForAllStakeholder() {
    return new Promise((resolve, reject) => {
        this._stakeholderService.getAllStakeholderForProject(this._stakeholderService.myGlobalVariable)
            .subscribe((res: any) => {
                console.log(res);
                const promises = [];
                for (let i = 0; i < res.length; i++) {
                    promises.push(this.sendNotification(res[i]));
                }
                Promise.all(promises)
                    .then(results => {
                        resolve(results);
                    })
                    .catch(error => {
                        reject(error);
                    });
            }, error => {
                reject(error);
            });
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
      this.sendNotificationForAllStakeholder();
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
