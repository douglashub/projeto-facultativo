import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalsListComponent } from './professionals-list/professionals-list.component';
import { ProfessionalsProfileComponent } from './professionals-profile/professionals-profile.component';
import { ProfessionalsChatComponent } from './professionals-chat/professionals-chat.component';
import { ProfessionalsCallComponent } from './professionals-call/professionals-call.component';

@NgModule({
  declarations: [ProfessionalsListComponent, ProfessionalsProfileComponent, ProfessionalsChatComponent, ProfessionalsCallComponent],
  imports: [
    CommonModule
  ]
})
export class ProfessionalsModule { }
