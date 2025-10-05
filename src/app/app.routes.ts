import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Events } from './pages/events/events';
import { Map } from './pages/map/map';
import { EventInfo } from './pages/event-info/event-info';
import { ProfileView } from './pages/profile/profile-view/profile-view';
import { AddEvent } from './pages/profile/add-event/add-event';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'events', component: Events },
      { path: 'map', component: Map },
      { path: 'event/:id', component: EventInfo },
      { path: 'profile', component: ProfileView },
      { path: 'add-event', component: AddEvent },
      { path: 'my-events', component: ProfileView }
    ],
  },
  { path: '**', redirectTo: '' },
];
