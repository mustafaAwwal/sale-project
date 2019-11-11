import { Routes } from '@angular/router';
import { SalesListComponent } from './pages/sales-list/sales-list.component';
import { NewSaleComponent } from './pages/new-sale/new-sale.component';

export const SalesRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'salesList'
    },
    {
        path: 'salesList',
        children: [
            {
                path: '',
                component: SalesListComponent,
                data: {animation: 'salesList'}
            },
            {
                path:'newSale',
                component: NewSaleComponent,
                data: {animation: 'newSale'}
            }
        ]
    }
]