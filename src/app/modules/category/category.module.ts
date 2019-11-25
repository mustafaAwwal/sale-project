import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './pages/category/category.component';
import { RouterModule } from '@angular/router';
import { CategoryRoutes } from './category.routes';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewCategoryComponent } from './components/new-category/new-category.component';



@NgModule({
  declarations: [CategoryComponent, CategoryTableComponent, NewCategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CategoryRoutes),
    SharedComponentsModule,
    MaterialModule,
    FontAwesomeModule
    
  ]
})
export class CategoryModule { }
