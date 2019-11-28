import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchFilterPipe } from './product-search-filter.pipe';


@NgModule({
  declarations: [ProductSearchFilterPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    ProductSearchFilterPipe
  ]
})
export class CommonPipeModule { }
