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
import { SupplierComponent } from './pages/supplier/supplier.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { SubCategoryListComponent } from './pages/sub-category-list/sub-category-list.component';
import { NewSubCategoryComponent } from './components/new-sub-category/new-sub-category.component';
import { SubCategoryTableComponent } from './components/sub-category-table/sub-category-table.component';
import { SupplierTableComponent } from './components/supplier-table/supplier-table.component';
import { SupplierFormComponent } from './pages/supplier-form/supplier-form.component';



@NgModule({
  declarations: [ProductListComponent, NewProductComponent, PrintBarcodeComponent, ProductTableComponent, CategoryComponent, SupplierComponent, CategoryTableComponent, NewCategoryComponent,SubCategoryListComponent,NewSubCategoryComponent,SubCategoryTableComponent, SupplierTableComponent, SupplierFormComponent],
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
