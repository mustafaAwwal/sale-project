import { Routes } from '@angular/router';
import { TransactionListComponent } from './pages/transaction-list/transaction-list.component';

export const TransactionRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'transactionList'
    },
    {
        path: 'transactionList',
        children: [
            {
                path: '',
                component: TransactionListComponent
            }
        ]
    }
]