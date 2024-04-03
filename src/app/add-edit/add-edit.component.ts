
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../services/project.service';
import { CoreService } from '../core/core.service';
import { ChangeDetectorRef } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css'
})

export class AddEditComponent implements OnInit {
  @Output() projectUpdated: EventEmitter<void> = new EventEmitter<void>();
  constructor(
    private _fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private _projectService: ProjectService,
    private _dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService

  ) {
    this.projectForm = this._fb.group({
      
      name: '',
      description: '',
      manager:''
    });
  }

  projectForm: FormGroup;

  manager: string[] = [
    'Dipa Majumdar',
    'Firoza Parveen',
  ];

  ngOnInit(): void {
    console.log(this.projectForm.value);

    this.projectForm.patchValue(this.data);
  }
  async onFormSubmit() {
    if (this.projectForm.valid) {
      try {
        // Assuming your form data contains project details
        if (this.data) {
          await this._projectService.updateProject(this.data.id, this.projectForm.value).toPromise();
          this._coreService.openSnackBar('Project Updated!', 'done');
        } else {
          await this._projectService.createProject(this.projectForm.value).toPromise();
          this._coreService.openSnackBar('Project added!', 'done');
        }
        this.projectUpdated.emit(); // Emit event after project is updated or added
        this._dialogRef.close(true);
      } catch (err) {
        console.error('Error occurred during project creation:', err);
        // Handle error
      }
    }
  }
}
