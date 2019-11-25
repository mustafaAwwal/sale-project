import { Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';

export const CategoryRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'category'
    },
    {
        path: 'categoryList',
        children: [
            {
                path: '',
                component: CategoryComponent
            }
            
        ]
    }
]