import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Layout } from './layout/layout/layout';
import { Events } from './pages/events/events';

export const routes: Routes = [
    {
    path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'events', component: Events }
    ],
  },
  { path: '**', redirectTo: '' },
];
