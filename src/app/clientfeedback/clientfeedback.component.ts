import { Component,OnInit } from '@angular/core';
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
import { Location } from '@angular/common';



@Component({
  selector: 'app-clientfeedback',
  templateUrl: './clientfeedback.component.html',
  styleUrl: './clientfeedback.component.css'
})

export class ClientfeedbackComponent implements OnInit{

  feedbackList: any[] = [];
  feedbackListAll:any;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  feedbacksForProject:any;
window: any;


  constructor(private _formBuilder: FormBuilder,
     private router: Router, public _feedbackService: FeedbackService, private nav: FeedbackService,private _dialog: MatDialog) {
    this. getFeedbackList();
  }

  displayedColumns: string[] = ['feedbacktype', 'datereceived', 'detailedfeedabck','actiontaken','closuredate' , "action"];
 
  openAddEditForm(){
    this._dialog.open(FeedbackAddEditComponent);
    }

    ngOnInit() {
      this.getFeedbackList();
    }
    


    getFeedbackList() {
      this._feedbackService.getFeedbackList().subscribe((res: any) => {
        this.feedbackListAll = res.items;
        this.feedbackList = []; // Clear the existing feedbackList array
        for(let i=0; i<this.feedbackListAll.length; i++) {
          if(this.feedbackListAll[i].projectId == this._feedbackService.myGlobalVariable) {
            this.feedbackList.push(this.feedbackListAll[i]);
          }
        }
        
      });
    }

getfeedbackbyid(){
  const Id=  this._feedbackService.myGlobalVariable;
  console.log(Id);
  console.log(this.feedbackListAll);

 console.log(this.feedbackList);
}

openEditForm(data: any) {
  this._dialog.open(FeedbackAddEditComponent,{
    data,
  });
  this.getFeedbackList();
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
    // const Id= this.extractIdFromUrl('clientfeedback')
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
  navigateToAudit(){
    this.router.navigate(['/audithistory']);
  }
  navigateToStakeholder(){
    this.router.navigate(['/stakeholder']);
  }
  navigateToversion(){
    this.router.navigate(['/versionhistory']);
  }
}
