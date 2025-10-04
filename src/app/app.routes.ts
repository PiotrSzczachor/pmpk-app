import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Layout } from './layout/layout/layout';

export const routes: Routes = [
    {
    path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
    ],
  },
  { path: '**', redirectTo: '' },
];
