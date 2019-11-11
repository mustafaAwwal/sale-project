import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const DashBoardRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path:'home',
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    }
]