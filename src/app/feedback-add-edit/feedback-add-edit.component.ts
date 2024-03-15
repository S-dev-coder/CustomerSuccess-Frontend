import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FeedbackService } from '../services/feedback.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback-add-edit',
  templateUrl: './feedback-add-edit.component.html',
  styleUrl: './feedback-add-edit.component.css'
})


export class FeedbackAddEditComponent {
  feedbackForm: FormGroup;


  constructor(
    private _fb: FormBuilder, private _feedbackService: FeedbackService, private _dialogRef: MatDialogRef<FeedbackAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.feedbackForm = this._fb.group({
      projectId: this._feedbackService.myGlobalVariable,
      feedbackType: '',
      dateReceived: '',
      detailedFeedback: '',
      actionTaken: '',
      closureDate: '',
    });
  }
  ngOnInit(): void {
    console.log(this.feedbackForm.value);

    this.feedbackForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.feedbackForm.valid) {
      console.log(this.feedbackForm.value);
      this._feedbackService.createFeedback(this.feedbackForm.value).subscribe({
        next: (val: any) => {
          alert('Feedback added ');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error('Error occurred during feedback creation:', err);
        }



      })
    }
  }
}
