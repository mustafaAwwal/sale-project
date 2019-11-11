import { Routes } from '@angular/router';
import { BranchListComponent } from './pages/branch-list/branch-list.component';

export const BranchRoutes : Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'branchList'
    },
    {
        path: 'branchList',
        children: [
            {
                path: '',
                component: BranchListComponent
            }
        ]
    }
]