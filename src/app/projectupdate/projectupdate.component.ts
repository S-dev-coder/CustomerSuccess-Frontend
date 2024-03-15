import { Component,OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { ProjectUpdateService } from '../services/project-update.service';
import {MatDialog} from '@angular/material/dialog' ;
import { AddEditComponent } from '../add-edit/add-edit.component';
import { UpdateAddEditComponent } from '../update-add-edit/update-add-edit.component';

@Component({
  selector: 'app-projectupdate',
  templateUrl: './projectupdate.component.html',
  styleUrl: './projectupdate.component.css'
})


export class ProjectupdateComponent implements OnInit{
  updateList: any[]= [];
  updateListAll: any;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;


  constructor(private _formBuilder: FormBuilder, private router: Router, private _projectupdateService: ProjectUpdateService, private nav: ProjectUpdateService,private _dialog: MatDialog) {
    this.getUpdateList();
  }
  displayedColumns: string[] = ['date', 'generalUpdates', "action"];

  openAddEditForm(){
    this._dialog.open(UpdateAddEditComponent);
    }

    ngOnInit() {
      this.getUpdateList();
    }
    

  getUpdateList() {
    this._projectupdateService.getUpdateList().subscribe((res: any) => {
      console.log(res.items);
      this.updateListAll = res.items;
      this.updateList = []; // Clear the existing updateList array
      for(let i=0; i<this.updateListAll.length; i++) {
        if(this.updateListAll[i].projectId == this._projectupdateService.myGlobalVariable) {
          this.updateList.push(this.updateListAll[i]);
        }
      }
    });

  }
  openEditForm(data: any) {
    console.log(data);
    this._dialog.open(UpdateAddEditComponent,{
      data,

    });
    this.getUpdateList();
  }

  deleteUpdate(id: string) {
    this._projectupdateService.deleteUpdate(id).subscribe((res: any) => {
      console.log(res);
      this.getUpdateList();
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
