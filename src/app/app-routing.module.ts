import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './pages/auth/auth.module#AuthModule'
  },
  {
    path: 'professionals',
    loadChildren: './pages/professionals/professionals.module#ProfessionalsModule'
  },
  {
    path: 'mood',
    loadChildren: './pages/mood/mood.module#MoodModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
