import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApprovedTeamComponent } from './approved-team/approved-team.component';
import { ResourcesComponent } from './resources/resources.component';
import { ClientfeedbackComponent } from './clientfeedback/clientfeedback.component';
import { ProjectupdateComponent } from './projectupdate/projectupdate.component';
import { MomComponent } from './mom/mom.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'approved-team', component: ApprovedTeamComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'clientfeedback', component: ClientfeedbackComponent },
  { path: 'projectupdate', component: ProjectupdateComponent},
  { path: 'meetingminutes', component: MomComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'dashboard', component: DashboardComponent }
  // Route to Home component
  // Add more routes here if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
