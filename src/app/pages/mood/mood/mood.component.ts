import { Component, OnInit } from '@angular/core';
import { MoodModel } from '../models/mood.model';
import { MoodService } from 'src/app/services/mood/mood.service';
import { MatDialog } from '@angular/material';
import { AddMoodDialogComponent } from '../add-mood-dialog/add-mood-dialog.component';

@Component({
  selector: 'hfmh-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.scss']
})
export class MoodComponent implements OnInit {
  moods: MoodModel[];

  constructor(private moodService: MoodService, public dialog: MatDialog) {
    this.moods = this.moodService.getMoods() || [];
    console.log(this.moods);
  }

  openAddMoodDialog(): void {
    console.log('opening dialog..');

    const dialogRef = this.dialog.open(AddMoodDialogComponent, {
      width: '340px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((mood: MoodModel) => {
      console.log(mood);

      if (mood) {
        this.moods.push(mood);
        this.moodService.addMood(mood);
      }
    });
  }

  ngOnInit() {}
}
