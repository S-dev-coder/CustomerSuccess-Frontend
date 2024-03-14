import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApprovedTeamService } from '../services/approved-team.service';
import { NgForm } from '@angular/forms';
import {PeriodicElement} from '../Model/team';
import { ResourceService } from '../services/resource.service';
import { AddEditComponent } from '../add-edit/add-edit.component';
import {MatDialog} from '@angular/material/dialog' ;

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {
 resourceList: any;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;


  constructor(private _formBuilder: FormBuilder, private router: Router, private _resourceService: ResourceService, private nav: ResourceService,private _dialog: MatDialog) {
    this.getResourceList();
  }
  displayedColumns: string[] = ['name', 'role', 'start','end' ,'comment', "action"];

  getResourceList() {
    this._resourceService.getResourceList().subscribe((res: any) => {
      console.log(res.items);
      this.resourceList = res.items;
    });
  }

  deleteResource(id: string) {
    this._resourceService.deleteResource(id).subscribe((res: any) => {
      console.log(res);
      this.getResourceList();
    });
  }
  
  openAddEditForm(){
    this._dialog.open(AddEditComponent);
    }
    
  navigateTo() {
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
