import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalsListComponent } from './professionals-list/professionals-list.component';
import { ProfessionalsProfileComponent } from './professionals-profile/professionals-profile.component';
import { ProfessionalsChatComponent } from './professionals-chat/professionals-chat.component';
import { ProfessionalsCallComponent } from './professionals-call/professionals-call.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ProfessionalsRoutingModule } from './professionals-routing.module';

@NgModule({
  declarations: [
    ProfessionalsListComponent,
    ProfessionalsProfileComponent,
    ProfessionalsChatComponent,
    ProfessionalsCallComponent,
    ProfessionalsComponent
  ],
  imports: [CommonModule, ProfessionalsRoutingModule]
})
export class ProfessionalsModule {}
