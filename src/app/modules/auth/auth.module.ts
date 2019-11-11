import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { AuthOutletComponent } from './pages/auth-outlet/auth-outlet.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AuthOutletComponent, LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthRoutes)
  ]
})
export class AuthModule { }
