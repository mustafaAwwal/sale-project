import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoryListComponent } from './pages/sub-category-list/sub-category-list.component';
import { RouterModule } from '@angular/router';
import { SubCategoryRoutes } from './sub-category.routes';
import { SubCategoryTableComponent } from './components/sub-category-table/sub-category-table.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [SubCategoryListComponent, SubCategoryTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SubCategoryRoutes),
    MaterialModule,
    SharedComponentsModule,
    FontAwesomeModule
  ]
})
export class SubCategoryModule { }
