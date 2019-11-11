import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatExpansionModule, MatTableModule, MatSelectModule } from '@angular/material'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
