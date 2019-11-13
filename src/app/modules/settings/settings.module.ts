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



@NgModule({
  declarations: [GeneralSettingsComponent, RoleComponent, VatComponent, FormHeadingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoutes),
    MaterialModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
