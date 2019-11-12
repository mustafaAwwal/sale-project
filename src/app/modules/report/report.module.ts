import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDashboardComponent } from './pages/report-dashboard/report-dashboard.component';
import { RouterModule } from '@angular/router';
import { ReportRoutes } from './report.routes';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReportCardComponent } from './components/report-card/report-card.component';



@NgModule({
  declarations: [ReportDashboardComponent,ReportCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ReportRoutes),
    MaterialModule,
    SharedComponentsModule,
    FontAwesomeModule,
  ]
})
export class ReportModule { }
