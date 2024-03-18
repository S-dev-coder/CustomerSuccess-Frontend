import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BudgetService } from '../services/buget.service';


@Component({
  selector: 'app-budget-add-edit',
  templateUrl: './budget-add-edit.component.html',
  styleUrl: './budget-add-edit.component.css'
})

export class BudgetAddEditComponent {
  budgetForm: FormGroup;
  
  constructor(
    private _fb: FormBuilder, private _budgetService: BudgetService, private _dialogRef: MatDialogRef<BudgetAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this. budgetForm= this._fb.group({
      projectId: this. _budgetService.myGlobalVariable,
      type: '',
      durationInMonths: '',
      budgetedHours: '',
    });
  }
 
  
  ngOnInit(): void {
    console.log(this. budgetForm.value);

    this. budgetForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this. budgetForm.valid) {
      console.log(this. budgetForm.value);
      this._budgetService.createBudget(this. budgetForm.value).subscribe({
        next: (val: any) => {
          alert('Project Budget added ');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error('Error occurred during feedback creation:', err);
        }



      })
    }
  }
}
