
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../services/project.service';
import { ApprovedTeamService } from '../services/approved-team.service';

@Component({
  selector: 'app-team-add-edit',
  templateUrl: './team-add-edit.component.html',
  styleUrl: './team-add-edit.component.css'
})
export class TeamAddEditComponent {

  constructor(
    private _fb: FormBuilder,
    private _approvedteamService: ApprovedTeamService,
    private _dialogRef: MatDialogRef<TeamAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    this.teamForm = this._fb.group({
      noOfResources: '',
      role: '',
      availablity:'',
      duration:'',

    });
  }
teamForm:FormGroup;

onFormSubmit() {
  if (this.teamForm.valid) {
    console.log(this.teamForm.value);
    this._approvedteamService.createTeam(this.teamForm.value).subscribe({

      next: (val: any) => {
        alert('Project added ');
        this._dialogRef.close();
      },
      error: (err: any) => {
        console.error('Error occurred during project creation:', err); // Log error
        // You can add further error handling here, such as displaying an error message to the user
      }
    });
  }
}

}
