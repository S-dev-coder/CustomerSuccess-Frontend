import { Component } from '@angular/core';
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

@Component({
  selector: 'app-projectupdate',
  templateUrl: './projectupdate.component.html',
  styleUrl: './projectupdate.component.css'
})

export class ProjectupdateComponent {
  updateList: any;
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
    this._dialog.open(AddEditComponent);
    }
  getUpdateList() {
    this._projectupdateService.getUpdateList().subscribe((res: any) => {
      console.log(res.items);
      this.updateList = res.items;
    });
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
