import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MoodModel, days } from '../models/mood.model';

@Component({
  selector: 'hfmh-add-mood-dialog',
  templateUrl: './add-mood-dialog.component.html',
  styleUrls: ['./add-mood-dialog.component.scss']
})
export class AddMoodDialogComponent implements OnInit {
  moodForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddMoodDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  createForm(): void {
    this.moodForm = this.fb.group({
      mood: new FormControl('', [Validators.required]),
      notes: new FormControl('', []),
      date: new FormControl('', [])
    });
  }

  getErrorMessage(inputName: string): string {
    const input = this.moodForm.get(inputName);

    return input.hasError('required') ? 'You must enter a value' : '';
  }

  close({ value, valid }): void {
    if (valid) {
      const mood: MoodModel = value;
      mood.date = new Date();
      this.dialogRef.close(value);
    }
  }

  ngOnInit() {}
}
