import { Routes } from '@angular/router';
import { AuthOutletComponent } from './pages/auth-outlet/auth-outlet.component';
import { LoginComponent } from './pages/login/login.component';

export const AuthRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: AuthOutletComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            }
        ]
    }
]