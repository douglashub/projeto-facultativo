import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ProfessionalsProfileComponent } from './professionals-profile/professionals-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalsComponent
  },
  {
    path: 'profile/:professionalId',
    component: ProfessionalsProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalsRoutingModule {}
