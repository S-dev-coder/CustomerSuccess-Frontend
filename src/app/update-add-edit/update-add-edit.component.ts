import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FeedbackService } from '../services/feedback.service';
import { ProjectUpdateService } from '../services/project-update.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-add-edit',
  templateUrl: './update-add-edit.component.html',
  styleUrl: './update-add-edit.component.css'
})
export class UpdateAddEditComponent {
  updateForm: FormGroup;

   constructor(
  private _fb: FormBuilder, private _projectupdateService: ProjectUpdateService, private _dialogRef: MatDialogRef<UpdateAddEditComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
) {
  this.updateForm = this._fb.group({
    projectId: this._projectupdateService.myGlobalVariable,
    date: '',
    generalUpdates: '',
  
  });
  
}

ngOnInit(): void {
  console.log(this.updateForm.value);

  this.updateForm.patchValue(this.data);
}
onFormSubmit() {
  if (this.updateForm.valid) {
    console.log(this.updateForm.value);
    this._projectupdateService.createUpdate(this.updateForm.value).subscribe({
      next: (val: any) => {
        alert('Project Update added ');
        this._dialogRef.close();
      },
      error: (err: any) => {
        console.error('Error occurred during feedback creation:', err);
      }



    })
  }
}
}
