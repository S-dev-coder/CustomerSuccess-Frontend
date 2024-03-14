
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../services/project.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css'
})

export class AddEditComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private _projectService: ProjectService,
    private _dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService

  ) {
    this.projectForm = this._fb.group({
      name: '',
      description: '',
    });
  }

  projectForm: FormGroup;

  manager: string[] = [
    'Dipa Majumdar',
    'Dipa Majumdar',
    'Dipa Majumdar',
    'Dipa Majumdar',
    'Dipa Majumdar'
  ];

  ngOnInit(): void {
    console.log(this.projectForm.value);

    this.projectForm.patchValue(this.data);
  }
  onFormSubmit() {
    if (this.projectForm.valid) {
      if(this.data){
        console.log(this.projectForm.value);
        this._projectService.updateProject(this.data.id,this.projectForm.value).subscribe({
  
          next: (val: any) => {
           
            this._coreService.openSnackBar('Project Updated!', 'done');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error('Error occurred during project creation:', err); // Log error
            // You can add further error handling here, such as displaying an error message to the user
          }
        });
        
      }else{
        console.log(this.projectForm.value);
        this._projectService.createProject(this.projectForm.value).subscribe({
  
          next: (val: any) => {
            this._coreService.openSnackBar('Project added!', 'done');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error('Error occurred during project creation:', err); // Log error
            // You can add further error handling here, such as displaying an error message to the user
          }
        });
      }
     
    }
    
  }

}
