import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { DashBoardRoutes } from './dashboard.routes';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [HomeComponent, StatCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashBoardRoutes),
    FontAwesomeModule
  ]
})
export class DashboardModule { }
