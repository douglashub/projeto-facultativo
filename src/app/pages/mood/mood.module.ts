import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoodComponent } from './mood/mood.component';
import { MoodRoutingModule } from './mood-routing.module';

@NgModule({
  declarations: [MoodComponent],
  imports: [CommonModule, MoodRoutingModule]
})
export class MoodModule {}
