import { Routes } from '@angular/router';
import { ExpenseListComponent } from './pages/expense-list/expense-list.component';
import { TransactionListComponent } from './pages/transaction-list/transaction-list.component';
import { CustomerLedgerComponent } from './pages/customer-ledger/customer-ledger.component';
import { SupplierLedgerComponent } from './pages/supplier-ledger/supplier-ledger.component';

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
            },
            {
                path: 'customerLedger',
                component: CustomerLedgerComponent
            },
            {
                path: 'supplierLedger',
                component: SupplierLedgerComponent
            }
        ]
    }
]