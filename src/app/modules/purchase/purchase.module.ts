import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseListComponent } from './pages/purchase-list/purchase-list.component';
import { RouterModule } from '@angular/router';
import { PurchaseRoutes } from './purchase.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { PurchaseTableComponent } from './components/purchase-table/purchase-table.component';
import { NewPurchaseComponent } from './pages/new-purchase/new-purchase.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';



@NgModule({
  declarations: [PurchaseListComponent, PurchaseTableComponent, NewPurchaseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PurchaseRoutes),
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ]
})
export class PurchaseModule { }
