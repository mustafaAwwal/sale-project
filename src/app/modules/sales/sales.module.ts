import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SalesListComponent } from './pages/sales-list/sales-list.component';
import { RouterModule } from '@angular/router';
import { SalesRoutes } from './sales.routes';
import { TableComponent } from './components/table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewSaleComponent } from './pages/new-sale/new-sale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';



@NgModule({
  declarations: [SalesListComponent, TableComponent, NewSaleComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(SalesRoutes),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ]
})
export class SalesModule { }
