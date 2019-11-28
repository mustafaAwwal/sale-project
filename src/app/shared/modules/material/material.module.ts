import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatExpansionModule, MatTableModule, MatSelectModule, MatTabsModule, MatAutocompleteModule } from '@angular/material'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule,
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule,
    MatAutocompleteModule 
  ]
})
export class MaterialModule { }
