import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApprovedTeamService } from '../services/approved-team.service';
import { NgForm } from '@angular/forms';
import { PeriodicElement } from '../Model/team';
import { MatTableModule } from '@angular/material/table';
import { MoMService } from '../services/mom.service';
import {MatDialog} from '@angular/material/dialog'
import { AddEditComponent } from '../add-edit/add-edit.component';
@Component({
  selector: 'app-mom',
  templateUrl: './mom.component.html',
  styleUrl: './mom.component.css'
})
export class MomComponent {

  momList: any;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;


  constructor(private _formBuilder: FormBuilder, private router: Router, private _momService: MoMService, private nav: MoMService,private _dialog: MatDialog) {
    this.getMoMList();
  }
  displayedColumns: string[] = ["meetingDate", "duration", 'moMLink', 'comments', "action"];

  openAddEditForm(){
    this._dialog.open(AddEditComponent);
    }
  getMoMList() {
    this._momService.getMoMList().subscribe((res: any) => {
      console.log(res);
      this.momList = res.items;
    });
  }

  deleteMoM(id: string) {
    this._momService.deleteMoM(id).subscribe((res: any) => {
      console.log(res);
      this.getMoMList();
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
