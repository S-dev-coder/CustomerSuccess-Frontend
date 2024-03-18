import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RiskProfileService } from '../services/risk-profile.service';


@Component({
  selector: 'app-riskprofile-add-edit',
  templateUrl: './riskprofile-add-edit.component.html',
  styleUrl: './riskprofile-add-edit.component.css'
})

export class RiskprofileAddEditComponent {
 profileForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder, public _riskprofileService: RiskProfileService, private _dialogRef: MatDialogRef<RiskprofileAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.profileForm= this._fb.group({
      projectId: this._riskprofileService.myGlobalVariable,
      riskType: '',
      description: '',
      severity: '',
      remediationSteps: '',
      status: '',
      closureDate: '',
    });
  }
 
  
  ngOnInit(): void {
    console.log(this.profileForm.value);

    this.profileForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      this._riskprofileService.createProfile(this.profileForm.value).subscribe({
        next: (val: any) => {
          alert('Project Risk Profile added ');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error('Error occurred during feedback creation:', err);
        }



      })
    }
  }
}
