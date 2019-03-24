import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './guards/logged-in.guard';
import { NotLoggedInGuard } from './guards/not-logged-in.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
    canActivate: [LoggedInGuard],
    data: { title: 'home' }
  },
  {
    path: 'auth',
    loadChildren: './pages/auth/auth.module#AuthModule',
    canActivate: [NotLoggedInGuard],
    data: { title: 'auth' }
  },
  {
    path: 'professionals',
    loadChildren: './pages/professionals/professionals.module#ProfessionalsModule',
    canActivate: [LoggedInGuard],
    data: { title: 'professionals' }
  },
  {
    path: 'mood',
    loadChildren: './pages/mood/mood.module#MoodModule',
    canActivate: [LoggedInGuard],
    data: { title: 'mood' }
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfileModule',
    canActivate: [LoggedInGuard],
    data: { title: 'profile' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
