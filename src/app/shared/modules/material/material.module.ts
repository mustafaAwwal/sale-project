import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatExpansionModule, MatTableModule, MatSelectModule, MatTabsModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material'


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
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }
