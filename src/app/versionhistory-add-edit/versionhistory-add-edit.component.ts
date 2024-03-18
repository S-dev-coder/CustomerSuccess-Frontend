import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StakeholderService } from '../services/stakeholder.service';
import { VersionHistoryService } from '../services/versionhistory.service';

@Component({
  selector: 'app-versionhistory-add-edit',
  templateUrl: './versionhistory-add-edit.component.html',
  styleUrl: './versionhistory-add-edit.component.css'
})


export class VersionhistoryAddEditComponent {

  versionForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,public _versionhistoryService: VersionHistoryService, private _dialogRef: MatDialogRef<VersionhistoryAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.versionForm= this._fb.group({
      projectId: this._versionhistoryService.myGlobalVariable,
      version: '',
      type: '',
      change: '',
      changeReason: '',
      createdBy: '',
      revisionDate:'',
      approvalDate:'',
      approvedBy: '',
      action:'',
    });
  }
 

  ngOnInit(): void {
    console.log(this. versionForm.value);
    this. versionForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.versionForm.valid) {
      console.log(this.versionForm.value);
      this._versionhistoryService.createVersion(this.versionForm.value).subscribe({
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
