import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalsProfileComponent } from './professionals-profile/professionals-profile.component';
import { ProfessionalsChatComponent } from './professionals-chat/professionals-chat.component';
import { ProfessionalsCallComponent } from './professionals-call/professionals-call.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ProfessionalsRoutingModule } from './professionals-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    ProfessionalsProfileComponent,
    ProfessionalsChatComponent,
    ProfessionalsCallComponent,
    ProfessionalsComponent
  ],
  imports: [CommonModule, ProfessionalsRoutingModule, MaterialModule, PipesModule]
})
export class ProfessionalsModule {}
