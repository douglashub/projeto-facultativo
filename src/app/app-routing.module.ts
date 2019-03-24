import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule'
  },
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
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfileModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
