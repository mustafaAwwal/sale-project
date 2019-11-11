import { Routes } from '@angular/router';
import { SubCategoryListComponent } from './pages/sub-category-list/sub-category-list.component';

export const SubCategoryRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'subCategoryList'
    },
    {
        path: 'subCategoryList',
        children: [
            {
                path: '',
                component: SubCategoryListComponent
            }
        ]
    }
]