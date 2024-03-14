import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RiskAddEditComponent } from '../risk-add-edit/risk-add-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-riskprofile',
  templateUrl: './riskprofile.component.html',
  styleUrl: './riskprofile.component.css'
})
export class RiskprofileComponent {
displayedColumns: any;

  constructor(private router: Router,private _dialog: MatDialog) {
  }

  openAddEditForm(){
    this._dialog.open(RiskAddEditComponent);
    }
  
  navigateToteam() {
    this.router.navigate(['/approved-team']);
  }
  navigateToHome() {
    this.router.navigate(['/']);
  }
  navigateToresource(){
    this.router.navigate(['/resources']);
  }
  navigateToclientfeedback(){
    this.router.navigate(['/clientfeedback']);
  }
  navigateToprojectUpdate(){
    this.router.navigate(['/projectupdate']);
  }
  navigateToMoM(){
    this.router.navigate(['/meetingminutes']);
  }
  navigateToProjects(){
    this.router.navigate(['/projects']);
  }
  navigateTodashboard(){
    this.router.navigate(['/dashboard']);
  }
  navigateTobudget() {
    this.router.navigate(['/projectbudget']);
  }
  navigateTorisk() {
    this.router.navigate(['/riskprofile']);
  }
}
