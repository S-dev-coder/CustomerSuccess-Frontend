import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoMService } from '../services/mom.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mom-add-edit',
  templateUrl: './mom-add-edit.component.html',
  styleUrl: './mom-add-edit.component.css'
})
export class MomAddEditComponent {
  momForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder, private _momService: MoMService, private _dialogRef: MatDialogRef<MomAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.momForm = this._fb.group({
      projectId: this._momService.myGlobalVariable,
      meetingDate: '',
      duration: '',
      moMLink: '',
      comments: '',
      
    });
  }
  ngOnInit(): void {
    console.log(this.momForm.value);

    this.momForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.momForm.valid) {
      console.log(this.momForm.value);
      this._momService.createMoM(this.momForm.value).subscribe({
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
