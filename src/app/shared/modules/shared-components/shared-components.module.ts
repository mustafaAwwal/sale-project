import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHeadingComponent } from './common-heading/common-heading.component';
import { CreateButtonComponent } from './create-button/create-button.component';
import { MatButtonModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableActionComponent } from './table-action/table-action.component';



@NgModule({
  declarations: [CommonHeadingComponent, CreateButtonComponent, TableActionComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FontAwesomeModule
  ],
 
  exports: [
    CommonHeadingComponent,
    CreateButtonComponent,
    TableActionComponent
  ]
})
export class SharedComponentsModule { }
