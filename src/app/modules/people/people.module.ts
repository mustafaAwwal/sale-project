import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './pages/customer/customer.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { UserComponent } from './pages/user/user.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { RouterModule } from '@angular/router';
import { PeopleRoutes } from './people.routes';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SupplierTableComponent } from './components/supplier-table/supplier-table.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';



@NgModule({
  declarations: [CustomerComponent, SupplierComponent, UserComponent, CustomerTableComponent, SupplierTableComponent, UserTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(PeopleRoutes),
    FontAwesomeModule,
    SharedComponentsModule

  ]
})
export class PeopleModule { }
