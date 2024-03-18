import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StakeholderService } from '../services/stakeholder.service';

@Component({
  selector: 'app-stakeholder-add-edit',
  templateUrl: './stakeholder-add-edit.component.html',
  styleUrl: './stakeholder-add-edit.component.css'
})

export class StakeholderAddEditComponent {

 stakeholderForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,public _stakeholderService: StakeholderService, private _dialogRef: MatDialogRef<StakeholderAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.stakeholderForm= this._fb.group({
      projectId: this._stakeholderService.myGlobalVariable,
      title: '',
      name: '',
      contact: '',
      
    });
  }
 

  ngOnInit(): void {
    console.log(this.stakeholderForm.value);

    this.stakeholderForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.stakeholderForm.valid) {
      console.log(this.stakeholderForm.value);
      this._stakeholderService.createStakeholder(this.stakeholderForm.value).subscribe({
        next: (val: any) => {
          alert('Project Stakeholder added ');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error('Error occurred during feedback creation:', err);
        }



      })
    }
  }
}
