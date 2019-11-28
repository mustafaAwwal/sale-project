import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillAreaComponent } from './components/bill-area/bill-area.component';
import { PosScreenComponent } from './pages/pos-screen/pos-screen.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { RouterModule } from '@angular/router';
import { PosRoutes } from './pos.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonPipeModule } from 'src/app/shared/pipes/common-pipe.module';



@NgModule({
  declarations: [BillAreaComponent,PosScreenComponent,ProductSearchComponent, ItemCardComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    MaterialModule,
    RouterModule.forChild(PosRoutes),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CommonPipeModule
  ]
})
export class PosModule { }
