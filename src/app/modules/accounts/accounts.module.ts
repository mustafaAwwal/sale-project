import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseListComponent } from './pages/expense-list/expense-list.component';
import { ExpenseTableComponent } from './components/expense-table/expense-table.component';
import { TransactionListComponent } from './pages/transaction-list/transaction-list.component';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { CommonPipeModule } from 'src/app/shared/pipes/common-pipe.module';
import { RouterModule } from '@angular/router';
import { AccountsRoutes } from './accounts.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';
import { CustomerLedgerComponent } from './pages/customer-ledger/customer-ledger.component';
import { SupplierLedgerComponent } from './pages/supplier-ledger/supplier-ledger.component';
import { CustomerLedgerTableComponent } from './components/customer-ledger-table/customer-ledger-table.component';
import { SupplierLedgerTableComponent } from './components/supplier-ledger-table/supplier-ledger-table.component';



@NgModule({
  declarations: [
    ExpenseListComponent,
    ExpenseTableComponent,
    TransactionListComponent,
    TransactionTableComponent,
    CustomerLedgerComponent,
    SupplierLedgerComponent,
    CustomerLedgerTableComponent,
    SupplierLedgerTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CommonPipeModule,
    RouterModule.forChild(AccountsRoutes),
    FontAwesomeModule,
    SharedComponentsModule
  ]
})
export class AccountsModule { }
