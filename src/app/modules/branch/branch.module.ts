import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchListComponent } from './pages/branch-list/branch-list.component';
import { RouterModule } from '@angular/router';
import { BranchRoutes } from './branch.routes';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BranchTableComponent } from './components/branch-table/branch-table.component';



@NgModule({
  declarations: [BranchListComponent, BranchTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BranchRoutes),
    MaterialModule,
    SharedComponentsModule,
    FontAwesomeModule
  ]
})
export class BranchModule { }
