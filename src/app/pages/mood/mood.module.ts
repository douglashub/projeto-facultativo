import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoodComponent } from './mood/mood.component';
import { MoodRoutingModule } from './mood-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { AddMoodDialogComponent } from './add-mood-dialog/add-mood-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoodComponent, AddMoodDialogComponent],
  imports: [CommonModule, MoodRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule],
  entryComponents: [AddMoodDialogComponent]
})
export class MoodModule {}
