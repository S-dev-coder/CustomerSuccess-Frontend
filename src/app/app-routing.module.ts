import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApprovedTeamComponent } from './approved-team/approved-team.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to home
  // { path: '', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'approved-team', component: ApprovedTeamComponent },
  // Route to Home component
  // Add more routes here if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
