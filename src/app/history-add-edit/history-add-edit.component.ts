import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BudgetService } from '../services/buget.service';
import { AuditHistoryService } from '../services/history.service';
@Component({
  selector: 'app-history-add-edit',
  templateUrl: './history-add-edit.component.html',
  styleUrl: './history-add-edit.component.css'
})
export class HistoryAddEditComponent {

  historyForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder,public _audithistoryService: AuditHistoryService, private _dialogRef: MatDialogRef<HistoryAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.historyForm= this._fb.group({
      projectId: this._audithistoryService.myGlobalVariable,
      dateOfAudit: '',
      reviewedBy: '',
      status: '',
      reviewedSection: '',
      comments: '',
      actionItem: '',
    });
  }
 

  ngOnInit(): void {
    console.log(this.historyForm.value);

    this.historyForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.historyForm.valid) {
      console.log(this.historyForm.value);
      this._audithistoryService.createHistory(this.historyForm.value).subscribe({
        next: (val: any) => {
          alert('Project Audit History added ');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error('Error occurred during feedback creation:', err);
        }



      })
    }
  }
}
