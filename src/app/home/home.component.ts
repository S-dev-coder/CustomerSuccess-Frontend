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


  constructor(private _formBuilder: FormBuilder, private router: Router, private _projectService: ProjectService, private nav: ProjectService) {
    this.getProjectList();
  }
  displayedColumns: string[] = ['name', 'discription', 'project-manager', "action"];

  getProjectList() {
    this._projectService.getProjectList().subscribe((res: any) => {
      console.log(res.items);
      this.projectList = res.items;
    });
  }

  deleteProject(id: string) {
    this._projectService.deleteProject(id).subscribe((res: any) => {
      console.log(res);
      this.getProjectList();
    });
  }
  
  navigateTo() {
    this.router.navigate(['/approved-team']);
  }
  navigateToHome() {
    this.router.navigate(['/']);
  }
}
