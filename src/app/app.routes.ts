import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard }
];
