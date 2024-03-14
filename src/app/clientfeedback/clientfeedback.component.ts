import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApprovedTeamService } from '../services/approved-team.service';
import { NgForm } from '@angular/forms';
import {PeriodicElement} from '../Model/team';
import { FeedbackService } from '../services/feedback.service';
import { AddEditComponent } from '../add-edit/add-edit.component';
import {MatDialog} from '@angular/material/dialog'
import { FeedbackAddEditComponent } from '../feedback-add-edit/feedback-add-edit.component';


@Component({
  selector: 'app-clientfeedback',
  templateUrl: './clientfeedback.component.html',
  styleUrl: './clientfeedback.component.css'
})

export class ClientfeedbackComponent {

  feedbackList: any;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  feedbacksForProject:any;

  constructor(private _formBuilder: FormBuilder, private router: Router, private _feedbackService: FeedbackService, private nav: FeedbackService,private _dialog: MatDialog) {
    this.getFeedbacksForProject();
  }
  displayedColumns: string[] = ['feedbacktype', 'datereceived', 'detailedfeedabck','actiontaken','closuredate' , "action"];
 
  openAddEditForm(){
    this._dialog.open(FeedbackAddEditComponent);
    }

  getFeedbackList() {
    this._feedbackService.getFeedbackList().subscribe((res: any) => {
      console.log(res.items);
      this.feedbackList = res.items;
    });
  }
  getFeedbacksForProject() {
    // Fetch all client feedbacks for the specified project ID
    const projectId = ''; // Replace 'your_project_id' with the actual project ID
    this._feedbackService.getAllFeedbacksForProject(projectId).subscribe((res: any) => {
      console.log(res);
      this.feedbackList = res.items; // Assign fetched feedback data to feedbackList
    });
  }

  deleteFeedback(id: string) {
    this._feedbackService.deleteFeedback(id).subscribe((res: any) => {
      console.log(res);
      this.getFeedbackList();
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
