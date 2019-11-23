import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SideNavComponent } from './navigation-panel/side-nav/side-nav.component';
import { ParentNavComponent } from './navigation-panel/parent-nav/parent-nav.component';
import { ExpansionComponent } from './navigation-panel/expansion/expansion.component';
import { RouterModule } from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './navigation-panel/header/header.component';
import { SideNavLinkComponent } from './navigation-panel/side-nav-link/side-nav-link.component';


@NgModule({
  declarations: [
    SideNavComponent,
    ParentNavComponent,
    ExpansionComponent,
    HeaderComponent,
    SideNavLinkComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    ParentNavComponent,
    SideNavComponent,
    ExpansionComponent,
    SideNavLinkComponent,
    HeaderComponent
  ]
})
export class SharedNavModule { }
