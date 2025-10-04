import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Events } from './pages/events/events';
import { Map } from './pages/map/map';
import { ProfileView } from './pages/profile/profile-view/profile-view';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'events', component: Events },
      { path: 'map', component: Map },
      { path: 'profile', component: ProfileView }
    ],
  },
  { path: '**', redirectTo: '' },
];
