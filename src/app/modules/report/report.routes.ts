import { Routes } from '@angular/router';
import { ReportDashboardComponent } from './pages/report-dashboard/report-dashboard.component';

export const ReportRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'reportDashboard'
    },
    {
        path: 'reportDashboard',
        children: [
            {
                path: '',
                component: ReportDashboardComponent
            }
        ]
    }
]