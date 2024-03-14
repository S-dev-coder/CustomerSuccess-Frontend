import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApprovedTeamService } from '../services/approved-team.service';
import { NgForm } from '@angular/forms';
import {PeriodicElement} from '../Model/team';
import {MatDialog} from '@angular/material/dialog'
 import { AddEditComponent } from '../add-edit/add-edit.component';
import { TeamAddEditComponent } from '../team-add-edit/team-add-edit.component';




@Component({
  selector: 'app-approved-team',
  templateUrl: './approved-team.component.html',
  styleUrl: './approved-team.component.css'
})


export class ApprovedTeamComponent {
 teamList: any;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;


  constructor(private _formBuilder: FormBuilder, private router: Router, private _approvedteamService: ApprovedTeamService, private nav: ApprovedTeamService,private _dialog: MatDialog) {
    this.getTeamList();
  }
  displayedColumns: string[] = ['numberofresources', 'role', 'availablity','duration' , "action"];

  getTeamList() {
    this._approvedteamService.getTeamList().subscribe((res: any) => {
      console.log(res.items);
      this.teamList = res.items;
    });
  }

  deleteTeam(id: string) {
    this._approvedteamService.deleteTeam(id).subscribe((res: any) => {
      console.log(res);
      this.getTeamList();
    });
  }
  
  openAddEditForm(){
    this._dialog.open(TeamAddEditComponent);
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

  


