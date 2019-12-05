import { Routes } from '@angular/router';
import { ExpenseListComponent } from './pages/expense-list/expense-list.component';
import { TransactionListComponent } from './pages/transaction-list/transaction-list.component';

export const AccountsRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'accountList'
    },
    {
        path: 'accountList',
        children: [
            {
                path: '',
                component: ExpenseListComponent
            },
            {
                path: 'transactions',
                component: TransactionListComponent
            }
        ]
    }
]