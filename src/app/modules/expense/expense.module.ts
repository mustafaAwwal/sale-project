import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseListComponent } from './pages/expense-list/expense-list.component';
import { RouterModule } from '@angular/router';
import { ExpenseRoutes } from './expense.routes';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';
import { ExpenseTableComponent } from './components/expense-table/expense-table.component';



@NgModule({
  declarations: [ExpenseListComponent, ExpenseTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ExpenseRoutes),
    MaterialModule,
    FontAwesomeModule,
    SharedComponentsModule
  ]
})
export class ExpenseModule { }
