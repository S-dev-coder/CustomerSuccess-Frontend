import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BudgetAddEditComponent } from '../budget-add-edit/budget-add-edit.component';

@Component({
  selector: 'app-projectbudget',
  templateUrl: './projectbudget.component.html',
  styleUrl: './projectbudget.component.css'
})
export class ProjectbudgetComponent {
displayedColumns: any;

  constructor( private router: Router,private _dialog: MatDialog) {
  }
  openAddEditForm(){
    this._dialog.open(BudgetAddEditComponent);
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
}
