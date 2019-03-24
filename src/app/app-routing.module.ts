import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './guards/logged-in.guard';
import { NotLoggedInGuard } from './guards/not-logged-in.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
    canActivate: [LoggedInGuard]
  },
  {
    path: 'auth',
    loadChildren: './pages/auth/auth.module#AuthModule',
    canActivate: [NotLoggedInGuard]
  },
  {
    path: 'professionals',
    loadChildren: './pages/professionals/professionals.module#ProfessionalsModule',
    canActivate: [LoggedInGuard]
  },
  {
    path: 'mood',
    loadChildren: './pages/mood/mood.module#MoodModule',
    canActivate: [LoggedInGuard]
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfileModule',
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
