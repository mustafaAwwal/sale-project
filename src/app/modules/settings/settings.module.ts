import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralSettingsComponent } from './pages/general-settings/general-settings.component';
import { RoleComponent } from './pages/role/role.component';
import { VatComponent } from './pages/vat/vat.component';
import { RouterModule } from '@angular/router';
import { SettingsRoutes } from './settings.routes';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormHeadingComponent } from './components/form-heading/form-heading.component';
import { VatTableComponent } from './components/vat-table/vat-table.component';
import { RoleTableComponent } from './components/role-table/role-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserComponent } from './pages/user/user.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { BranchListComponent } from './pages/branch-list/branch-list.component';
import { BranchTableComponent } from './components/branch-table/branch-table.component';



@NgModule({
  declarations: [GeneralSettingsComponent, RoleComponent, VatComponent, FormHeadingComponent, VatTableComponent, RoleTableComponent,UserTableComponent,UserComponent,UserFormComponent,BranchListComponent,BranchTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoutes),
    MaterialModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class SettingsModule { }
