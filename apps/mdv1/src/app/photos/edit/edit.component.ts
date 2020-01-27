import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv1-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  photoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: string, url: string, name: string}
  ) { this.buildForm(this.data); }

  buildForm(data) {
    console.log(data);
    this.photoForm = new FormGroup({
      name: new FormControl(data.name)
    })
  }

  onSubmit() {
    console.log(this.photoForm.value);
    this.dialogRef.close({...this.data, ...this.photoForm.value});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
