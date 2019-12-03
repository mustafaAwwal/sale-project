import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { PrintBarcodeComponent } from './pages/print-barcode/print-barcode.component';
import { CategoryComponent } from './pages/category/category.component';

export const ProductRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'productList'
    },
    {
        path: 'productList',
        children: [
            {
                path: '',
                component: ProductListComponent,
                data: {animation: 'productList'}
            },
            {
                path: 'newProduct',
                component: NewProductComponent,
                data: {animation: 'newProduct'}
            },
            {
                path: 'barcode',
                component: PrintBarcodeComponent,
                data: {animation: 'barcode'}
            },
            {
                path: 'category',
                component: CategoryComponent,
                data: {animation: 'category'}
            }
        ]
    }
]