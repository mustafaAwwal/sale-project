import { Routes } from '@angular/router';
import { ExpenseListComponent } from './pages/expense-list/expense-list.component';

export const ExpenseRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'expenseList'
    },
    {
        path: 'expenseList',
        children: [
            {
                path: '',
                component: ExpenseListComponent
            }
        ]
    }
]