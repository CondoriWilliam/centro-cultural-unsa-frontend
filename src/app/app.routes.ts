import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { HomeComponent } from './features/home/home';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
        ]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
    {
        path: "dashboard",
        component: DashboardLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    }
];
