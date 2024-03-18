import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { RiskprofileAddEditComponent } from '../riskprofile-add-edit/riskprofile-add-edit.component';
import { RiskProfileService } from '../services/risk-profile.service';

@Component({
  selector: 'app-riskprofile',
  templateUrl: './riskprofile.component.html',
  styleUrl: './riskprofile.component.css'
})
export class RiskprofileComponent {

  

  constructor(private _dialog: MatDialog, public _riskprofileService: RiskProfileService,private router: Router) {
    this.getProfileList();
  }
  displayedColumns: string[] = ['riskType', 'description', 'severity', 'impact','remediationSteps','status','closureDate',"action"];

  profileListAll: any[] = [];
  profileList: any[] = [];

  ngOnInit() {
    this.getProfileList();
  }



  getProfileList() {
    console.log(this._riskprofileService.myGlobalVariable);
    this._riskprofileService.getAllProfileForProject(this._riskprofileService.myGlobalVariable).subscribe((res: any) => {
      console.log(res);
      this. profileListAll = res; 
      console.log(res.items);// Assuming 'items' is the array of MoM items in the response
      this. profileList = this.profileListAll;
      console.log(this.profileList);
      console.log(this.profileListAll);
       // Assuming you want to assign all items by default
    });
  }

  openAddEditForm() {
    this._dialog.open(RiskprofileAddEditComponent);
  }

  openEditForm(data: any) {
    this._dialog.open(RiskprofileAddEditComponent, {
      data,
    });
    this.getProfileList();
  }

  deleteProfile(id: string) {
    this._riskprofileService.deleteProfile(id).subscribe((res: any) => {
      console.log(res);
      this.getProfileList();
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
}
