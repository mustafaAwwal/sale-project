import {Routes} from '@angular/router';
import { SecondaryOutletComponent } from './shared/components/secondary-outlet/secondary-outlet.component';
export const MainRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
    },
    {
        path: 'auth',
        loadChildren: './modules/auth/auth.module#AuthModule'
    },
    
    {
        path: 'admin',
        component: SecondaryOutletComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'sales',
                loadChildren: './modules/sales/sales.module#SalesModule',
            },
            {
                path: 'purchase',
                loadChildren: './modules/purchase/purchase.module#PurchaseModule'
            },
            {
                path: 'product',
                loadChildren: './modules/product/product.module#ProductModule'
            },
            {
                path: 'people',
                loadChildren: './modules/people/people.module#PeopleModule'
            },

            {
                path: 'subCategory',
                loadChildren: './modules/sub-category/sub-category.module#SubCategoryModule'
            },
            {
                path: 'transaction',
                loadChildren: './modules/transaction/transaction.module#TransactionModule'
            },
            {
                path: 'expense',
                loadChildren: './modules/expense/expense.module#ExpenseModule'
            },
            {
                path: 'branch',
                loadChildren: './modules/branch/branch.module#BranchModule'
            },
            {
                path: 'dashboard',
                loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'report',
                loadChildren: './modules/report/report.module#ReportModule'
            },
            {
                path: 'settings',
                loadChildren: './modules/settings/settings.module#SettingsModule'
            },
            {
                path: 'pos',
                loadChildren: './modules/pos/pos.module#PosModule'
            }
        ]
    }
    
]