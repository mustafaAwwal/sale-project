import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableActionComponent } from './table-action/table-action.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TableActionComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FontAwesomeModule,
    RouterModule
  ],
 
  exports: [
    TableActionComponent,
  ]
})
export class SharedComponentsModule { }
