import { Routes } from '@angular/router';
import { PurchaseListComponent } from './pages/purchase-list/purchase-list.component';
import { NewPurchaseComponent } from './pages/new-purchase/new-purchase.component';

export const PurchaseRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'purchaseList'
    },
    {
        path: 'purchaseList',
        children : [
            {
                path: '',
                component: PurchaseListComponent,
                data: {animation: 'purchaseList'}
            },
            {
                path: 'newPurchase',
                component: NewPurchaseComponent,
                data: {animation: 'newPurchase'}
            }
        ]
    }
]