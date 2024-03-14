import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { ApprovedTeamComponent } from './approved-team/approved-team.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ResourcesComponent } from './resources/resources.component';
import { ClientfeedbackComponent } from './clientfeedback/clientfeedback.component';
import { ProjectupdateComponent } from './projectupdate/projectupdate.component';
import { MomComponent } from './mom/mom.component';
import { ProjectsComponent } from './projects/projects.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { TeamAddEditComponent } from './team-add-edit/team-add-edit.component';
import { FeedbackAddEditComponent } from './feedback-add-edit/feedback-add-edit.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectbudgetComponent } from './projectbudget/projectbudget.component';
import { BudgetAddEditComponent } from './budget-add-edit/budget-add-edit.component';
import { RiskprofileComponent } from './riskprofile/riskprofile.component';
import { RiskAddEditComponent } from './risk-add-edit/risk-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    ApprovedTeamComponent,
    ResourcesComponent,
    ClientfeedbackComponent,
    ProjectupdateComponent,
    MomComponent,
    ProjectsComponent,
    DashboardComponent,
    AddEditComponent,
    TeamAddEditComponent,
    FeedbackAddEditComponent,
    ProjectDetailsComponent,
    ProjectbudgetComponent,
    BudgetAddEditComponent,
    RiskprofileComponent,
    RiskAddEditComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatTableModule,
    MatDatepickerModule,
    MatSelectModule,
    HttpClientModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormField,
    DatePipe,
    MatSnackBarModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage }
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }
}
export function getLocalStorage() {
  return (typeof window !== "undefined") ? window.localStorage : null;
}
