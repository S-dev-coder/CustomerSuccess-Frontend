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
import { FeedbackService } from '../services/feedback.service';
import { Console } from 'console';
import { ProjectUpdateService } from '../services/project-update.service';
import { MoMService } from '../services/mom.service';
import { BudgetService } from '../services/buget.service';
import { RiskProfileService } from '../services/risk-profile.service';
import { AudithistoryComponent } from '../audithistory/audithistory.component';
import { AuditHistoryService } from '../services/history.service';
import { StakeholderService } from '../services/stakeholder.service';
import { VersionHistoryService } from '../services/versionhistory.service';
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


  constructor(public feedbackService: FeedbackService, 
    private _formBuilder: FormBuilder,
     private router: Router,
      private _projectService: ProjectService, 
       private _dialog: MatDialog,
        private _coreService: CoreService, 
        public _projectupdateService: ProjectUpdateService,
        public _momService: MoMService,
        public _budgetService: BudgetService,
        public _riskprofileService: RiskProfileService , 
        public _audithistoryService:AuditHistoryService,
        public _stakeholderService:StakeholderService,
        public _versionhistoryService:VersionHistoryService,
      ) {
    this.getProjectList();

  }
  displayedColumns: string[] = ['id', 'name', 'description', 'manager', "action"];

  getProjectList() {
    this._projectService.getProjectList().subscribe((res: any) => {
      console.log(res.items);
      console.log("Hi");

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
    this.feedbackService.myGlobalVariable = id;
    this._projectupdateService.myGlobalVariable = id;
    this._momService.myGlobalVariable = id;
    this._budgetService.myGlobalVariable = id;
    this._riskprofileService.myGlobalVariable=id;
    this._audithistoryService.myGlobalVariable=id;
    this._stakeholderService.myGlobalVariable=id;
    this._versionhistoryService.myGlobalVariable=id;

    console.log(this.feedbackService.myGlobalVariable + "wuetiqwutiq");
    this.router.navigate(['/project-details', id]);

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
    this._dialog.open(AddEditComponent, {
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
