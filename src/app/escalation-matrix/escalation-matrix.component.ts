import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatrixAddEditComponent } from '../matrix-add-edit/matrix-add-edit.component';
import { EscalationMatrixService } from '../services/escalation-matrix.service';
@Component({
  selector: 'app-escalation-matrix',
  templateUrl: './escalation-matrix.component.html',
  styleUrl: './escalation-matrix.component.css'
})
export class EscalationMatrixComponent {
  matrixList: any;
  displayedColumns: string[] = ['level','personName']
  constructor(private _formBuilder: FormBuilder, 
    private _escalationmatrixService: EscalationMatrixService,
    private router: Router,private _dialog: MatDialog) {
  
  }
  openAddEditForm(){
    this._dialog.open(MatrixAddEditComponent);
    }
    deleteMatrix(id: string) {
      this._escalationmatrixService.deleteMatrix(id).subscribe((res: any) => {
        console.log(res);
        this.getMatrixList();
      });
    }
    getMatrixList() {
      this._escalationmatrixService.getMatrixList().subscribe((res: any) => {
        console.log(res.items);
        this.matrixList = res.items;
      });
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
  navigateToAudit(){
    this.router.navigate(['/audithistory']);
  }
  navigateToStakeholder(){
    this.router.navigate(['/stakeholder']);
  }
  navigateToversion(){
    this.router.navigate(['/versionhistory']);
  }
  navigateToMatrix(){
    this.router.navigate(['/escalationmatrix']);
  }
}
