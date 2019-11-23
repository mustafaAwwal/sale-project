import { Routes } from '@angular/router';
import { PosScreenComponent } from './pages/pos-screen/pos-screen.component';

export const PosRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'screen'
    },
    {
        path: 'screen',
        children: [
            {
                path: '',
                component: PosScreenComponent,
                data: {animation: 'posScreen'}
            }
        ]
    }
]