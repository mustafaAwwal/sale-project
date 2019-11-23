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



@NgModule({
  declarations: [GeneralSettingsComponent, RoleComponent, VatComponent, FormHeadingComponent, VatTableComponent, RoleTableComponent],
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
