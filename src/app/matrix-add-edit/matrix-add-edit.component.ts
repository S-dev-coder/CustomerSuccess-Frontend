
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoreService } from '../core/core.service';
import { ChangeDetectorRef } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EscalationMatrixService } from '../services/escalation-matrix.service';
@Component({
  selector: 'app-matrix-add-edit',
  templateUrl: './matrix-add-edit.component.html',
  styleUrl: './matrix-add-edit.component.css'
})
export class MatrixAddEditComponent {
  matrixForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _escalationmatrixService: EscalationMatrixService,
    private _dialogRef: MatDialogRef<MatrixAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ){
    this.matrixForm = this._fb.group({
      
      level: '',
      escalationType: '',
      personName:''
    });
  }

  async onFormSubmit() {
    if (this.matrixForm.valid) {
      try {
        // Assuming your form data contains project details
        if (this.data) {
          await this._escalationmatrixService.updateMatrix(this.data.id, this.matrixForm.value).toPromise();
          this._coreService.openSnackBar('Matrix Updated!', 'done');
        } else {
          await this._escalationmatrixService.createMatrix(this.matrixForm.value).toPromise();
          this._coreService.openSnackBar('Matrix added!', 'done');
        }
       // Emit event after project is updated or added
        this._dialogRef.close(true);
      } catch (err) {
        console.error('Error occurred during Matrix creation:', err);
        // Handle error
      }
    }
  }
}
