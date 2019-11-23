import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatExpansionModule, MatTableModule, MatSelectModule, MatTabsModule } from '@angular/material'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule    
  ]
})
export class MaterialModule { }
