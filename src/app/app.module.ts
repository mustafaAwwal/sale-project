import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { MainRoutes } from './main.routes';
import { SecondaryOutletComponent } from './shared/components/secondary-outlet/secondary-outlet.component';
import { SharedNavModule } from './shared/modules/shared-nav/shared-nav.module';

@NgModule({
  declarations: [
    AppComponent,
    SecondaryOutletComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(MainRoutes, {preloadingStrategy: PreloadAllModules}),
    SharedNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
