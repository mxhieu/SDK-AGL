import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule, PreloadAllModules, RouteConfigLoadEnd } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { AppSettingComponent } from './app-setting/app-setting.component';
import { InAppComponent } from './in-app/in-app.component';
import { NotificationComponent } from './notification/notification.component';
import { TelcoComponent } from './telco/telco.component';
import { ArmpdComponent } from './reports/armpd/armpd.component';
import { ArmComponent } from './reports/arm/arm.component';
import { RetentionComponent } from './reports/retention/retention.component';
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
import { BaseService } from '../service/base.service';
import { RealtimeComponent } from './reports/realtime/realtime.component';

const routestmp = [
  {
    path: 'report-arm',
    component: ArmComponent,
    subpath: 'report-arm'
  },
  {
    path: 'report-armpd',
    component: ArmpdComponent,
    subpath: 'report-armPd'
  },
  {
    path: 'report-realtime',
    component: RealtimeComponent,
    subpath: 'report-realtime'
  },
  {
    path: 'report-retention',
    component: RetentionComponent,
    subpath: 'report-retention'
  },
  {
    path: 'report-roi',
    component: RoiComponent,
    subpath: 'report-roi'
  },
  {
    path: 'report-roipd',
    component: RoipdComponent,
    subpath: 'report-roiPd'
  },
  {
    path: 'report-cohort',
    component: CohortComponent,
    subpath: 'report-cohort'
  },
  {
    path: 'report-kpi',
    component: KpireportComponent,
    subpath: 'report-kpi'
  },
  {
    path: 'report-ads',
    component: AdsReportComponent,
    subpath: 'report-ads'
  },
  {
    path: 'report-cards',
    component: CardComponent,
    subpath: 'report-card'
  },
  {
    path: 'transaction',
    component: TransactionComponent,
    subpath: 'iap-transaction'
  },
  {
    path: 'adslist',
    component: AdsPerformanceComponent,
    subpath: 'campaign-ad'
  },
  {
    path: 'campaign',
    component: CampaignComponent,
    subpath: 'campaign'
  },
  {
    path: 'sourceslist',
    component: SourceslistComponent,
    subpath: 'listsource'
  },
  {
    path: 'metric',
    component: MetricComponent,
    subpath: 'metric'
  },
  {
    path: 'setting',
    component: AppSettingComponent,
    subpath: 'app'
  },
  {
    path: 'player',
    component: PlayerComponent,
    subpath: 'player'
  },
  {
    path: 'in-app',
    component: InAppComponent,
    subpath: 'inapp-item'
  },
  {
    path: 'telco',
    component: TelcoComponent,
    subpath: 'card-item'
  },
  {
    path: 'notification',
    component: NotificationComponent,
    subpath: 'notification'
  }
]

const routes: Routes = routestmp;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
  constructor(private router: Router, public service: BaseService) {
    setTimeout(() => {
      this.router.config.forEach(objchild => {
        if(objchild.path == 'apps' && objchild.children) {
          const foundChild: any = objchild.children.find(child => (child as any)._loadedConfig);  
          if (foundChild && foundChild._loadedConfig.routes.length > 0) {
            let jsonredirect = this.changearr(foundChild._loadedConfig.routes)
            foundChild._loadedConfig.routes.push(jsonredirect)
          }
        }
      })
    })
  }

  changearr(arr) {
    let jsontmp = {
      path: '', redirectTo: 'metric', pathMatch: 'full', subpath: ''
    }
    for (let i in  arr) {
      let obj = arr[i]
      if (this.service.checkpermission(obj.subpath)) {
        jsontmp['redirectTo'] = obj.path
        break;
      }
    } 
    return jsontmp
  }

}
