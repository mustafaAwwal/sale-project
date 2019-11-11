import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './pages/transaction-list/transaction-list.component';
import { RouterModule } from '@angular/router';
import { TransactionRoutes } from './transaction.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';



@NgModule({
  declarations: [TransactionListComponent, TransactionTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TransactionRoutes),
    FontAwesomeModule,
    MaterialModule,
    SharedComponentsModule
  ]
})
export class TransactionModule { }
