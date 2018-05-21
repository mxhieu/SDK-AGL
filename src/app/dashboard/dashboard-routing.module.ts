import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { AppSettingComponent } from './app-setting/app-setting.component';
import { InAppComponent } from './in-app/in-app.component';
import { NotificationComponent } from './notification/notification.component';
import { TelcoComponent } from './telco/telco.component';
import { ArmpdComponent } from './reports/armpd/armpd.component';
import { ArmComponent } from './reports/arm/arm.component';
import { RoiComponent } from './reports/roi/roi.component';
import { RoipdComponent } from './reports/roipd/roipd.component';
import { SourceslistComponent } from './sourceslist/sourceslist.component';
import { MetricComponent } from './metric/metric.component';
import { CohortComponent } from './reports/cohort/cohort.component';
import { CampaignComponent } from './campaign/campaign.component';
import { KpireportComponent } from './reports/kpireport/kpireport.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AdsReportComponent } from './reports/ads-report/ads-report.component';
import { CardComponent } from './reports/card/card.component';
import { AdsPerformanceComponent } from './reports/ads-performance/ads-performance.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'report-arm',
    pathMatch: 'full'
  },
  {
    path: 'report-armpd',
    component: ArmpdComponent
  },
  {
    path: 'report-arm',
    component: ArmComponent
  },
  {
    path: 'report-kpi',
    component: KpireportComponent
  },
  {
    path: 'report-ads-performance',
    component: AdsPerformanceComponent
  },
  {
    path: 'report-roi',
    component: RoiComponent
  },
  {
    path: 'transaction',
    component: TransactionComponent
  },
  {
    path: 'report-roipd',
    component: RoipdComponent
  },
  {
    path: 'player',
    component: PlayerComponent
  },
  {
    path: 'setting',
    component: AppSettingComponent
  }
  ,
  {
    path: 'report-ads',
    component: AdsReportComponent
  },
  {
    path: 'in-app',
    component: InAppComponent
  },
  {
    path: 'telco',
    component: TelcoComponent
  },
  {
    path: 'campaign',
    component: CampaignComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'sourceslist',
    component: SourceslistComponent
  },
  {
    path: 'metric',
    component: MetricComponent
  },
  {
    path: 'report-cohort',
    component: CohortComponent
  },
  {
    path: 'report-cards',
    component: CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
