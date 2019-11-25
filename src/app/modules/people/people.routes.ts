import { Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { UserComponent } from './pages/user/user.component';
import { CustomerFormComponent } from './pages/customer-form/customer-form.component';
import { SupplierFormComponent } from './pages/supplier-form/supplier-form.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

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
            },
            {
                path: 'newCustomer',
                component: CustomerFormComponent
            },
            {
                path: 'newSupplier',
                component: SupplierFormComponent
            },
            {
                path: 'newUser',
                component: UserFormComponent
            },
        ]
    }
]