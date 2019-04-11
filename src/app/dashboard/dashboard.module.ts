import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { DashboardRoutingModule } from './dashboard-routing.module';

// Ngx Module
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { PlayerComponent } from './player/player.component';
import { AppSettingComponent } from './app-setting/app-setting.component';
import { InAppComponent } from './in-app/in-app.component';
import { NotificationComponent } from './notification/notification.component';
import { TelcoComponent } from './telco/telco.component';
import { ArmpdComponent } from './reports/armpd/armpd.component';
import { ArmComponent } from './reports/arm/arm.component';
import { ArmPackageComponent } from './reports/armpackage/armpackage.component';
import { RetentionComponent } from './reports/retention/retention.component';
import { RealtimeComponent } from './reports/realtime/realtime.component';
import { RoiComponent } from './reports/roi/roi.component';
import { RoipdComponent } from './reports/roipd/roipd.component';
import { SourceslistComponent } from './sourceslist/sourceslist.component';
import { MetricComponent } from './metric/metric.component';
import { CohortComponent } from './reports/cohort/cohort.component';
import { CampaignComponent } from './campaign/campaign.component';
import { KpireportComponent } from './reports/kpireport/kpireport.component';
import { AdsReportComponent } from './reports/ads-report/ads-report.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CardComponent } from './reports/card/card.component';
import { CardPackageComponent } from './reports/cardpackage/cardpackage.component';
import { AdsPerformanceComponent } from './reports/ads-performance/ads-performance.component';
import { OverviewComponent } from './reports/overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    AmChartsModule
  ],
  declarations: [
    PlayerComponent, AppSettingComponent, InAppComponent,
    NotificationComponent, TelcoComponent, ArmpdComponent, ArmComponent, ArmPackageComponent,
    RoiComponent, RoipdComponent, SourceslistComponent, MetricComponent, 
    CohortComponent, CampaignComponent, KpireportComponent,
    AdsReportComponent, TransactionComponent, CardComponent, CardPackageComponent, OverviewComponent, AdsPerformanceComponent, RealtimeComponent, RetentionComponent]

})
export class DashboardModule { }
