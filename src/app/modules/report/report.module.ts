import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDashboardComponent } from './pages/report-dashboard/report-dashboard.component';
import { RouterModule } from '@angular/router';
import { ReportRoutes } from './report.routes';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [ReportDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ReportRoutes),
    MaterialModule,
    SharedComponentsModule,
    FontAwesomeModule
  ]
})
export class ReportModule { }
