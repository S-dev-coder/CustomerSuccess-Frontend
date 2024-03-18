import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BudgetAddEditComponent } from '../budget-add-edit/budget-add-edit.component';
import { BudgetService } from '../services/buget.service';

@Component({
  selector: 'app-projectbudget',
  templateUrl: './projectbudget.component.html',
  styleUrl: './projectbudget.component.css'
})
export class ProjectbudgetComponent {
  displayedColumns: string[] = ['type', 'durationInMonths', 'budgetedHours', "action"];

  _feedbackService: any;
  feedbackListAll: any;
  budgetListAll: any[] = [];
  budgetList: any[] = [];
  

  constructor(private _dialog: MatDialog, public _budgetService: BudgetService,private router: Router) {
    this.getBudgetList();
  }
 

  ngOnInit() {
    this.getBudgetList();
  }



  getBudgetList() {
    console.log(this._budgetService.myGlobalVariable);
    this._budgetService.getAllBudgetForProject(this._budgetService.myGlobalVariable).subscribe((res: any) => {
      console.log(res);
      this.budgetListAll = res; 
      console.log(res.items);// Assuming 'items' is the array of MoM items in the response
      this.budgetList = this.budgetListAll; // Assuming you want to assign all items by default
    });
  }

  openAddEditForm() {
    this._dialog.open(BudgetAddEditComponent);
  }

  openEditForm(data: any) {
    this._dialog.open(BudgetAddEditComponent, {
      data,
    });
    this.getBudgetList();
  }

  deleteBudget(id: string) {
    this._budgetService.deleteBudget(id).subscribe((res: any) => {
      console.log(res);
      this.getBudgetList();
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
}
