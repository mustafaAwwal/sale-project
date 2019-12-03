import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { PrintBarcodeComponent } from './pages/print-barcode/print-barcode.component';
import { RouterModule } from '@angular/router';
import { ProductRoutes } from './product.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';
import { CategoryComponent } from './pages/category/category.component';
import { SubCategoryComponent } from './pages/sub-category/sub-category.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';



@NgModule({
  declarations: [ProductListComponent, NewProductComponent, PrintBarcodeComponent, ProductTableComponent, CategoryComponent, SubCategoryComponent, SupplierComponent, CategoryTableComponent, NewCategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedComponentsModule
  ]
})
export class ProductModule { }
