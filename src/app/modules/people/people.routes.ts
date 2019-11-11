import { Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { UserComponent } from './pages/user/user.component';

export const PeopleRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'peopleType'
    },
    {
        path: 'peopleType',
        children: [
            {
                path: '',
                component: CustomerComponent,
                data: {animation:'customer'}
            },
            {
                path: 'supplier',
                component: SupplierComponent,
                data: {animation:'supplier'}
            },
            {
                path: 'user',
                component: UserComponent,
                data: {animation:'user'}
            }
        ]
    }
]