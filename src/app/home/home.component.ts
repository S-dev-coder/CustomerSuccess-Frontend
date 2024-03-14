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
import { MatDialog } from '@angular/material/dialog'
import { AddEditComponent } from '../add-edit/add-edit.component';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  projectList: any;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;


  constructor(private _formBuilder: FormBuilder, private router: Router, private _projectService: ProjectService, private nav: ProjectService, private _dialog: MatDialog, private _coreService: CoreService) {
    this.getProjectList();

  }
  displayedColumns: string[] = ['id','name', 'description', 'manager', "action"];

  getProjectList() {
    this._projectService.getProjectList().subscribe((res: any) => {
      console.log(res.items);
      this.projectList = res.items;
    });
  }

  deleteProject(id: string) {
    this._projectService.deleteProject(id).subscribe((res: any) => {
      
      this._coreService.openSnackBar('Project deleted!', 'done');
      this.getProjectList();
    });
  }
  openProjectDetails(id: string) {
    this.router.navigate(['/project-details',id]);
  }

  openAddEditForm() {
    const dialogRef = this._dialog.open(AddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProjectList();
        }
      },
    });
  }

  openEditForm(data: any) {
    this._dialog.open(AddEditComponent,{
      data,
    });
    this.getProjectList();
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
  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
  navigateTodashboard() {
    this.router.navigate(['/dashboard']);
  }
}
