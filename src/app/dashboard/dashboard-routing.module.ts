import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component';
import { CampaignComponent } from './campaign.component';
import { AdreportComponent } from './adreport.component';
import { TrackingComponent } from './tracking.component';
import { PlayerComponent } from './player.component';
import { AppSettingComponent } from './app-setting/app-setting.component';
import { SdkInformationComponent } from './sdk-information/sdk-information.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'sdk',
    component: SdkInformationComponent
  },
  {
    path: 'adreport',
    component: AdreportComponent,
    data: {
      title: 'Ad Report'
    }
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'campaign',
    component: CampaignComponent
  },
  {
    path: 'event',
    component: TrackingComponent
  },
  {
    path: 'user',
    component: DashboardComponent
  },
  {
    path: 'player',
    component: PlayerComponent
  },
  {
    path: 'role',
    component: DashboardComponent,
    data: {
      title: 'Role Manager'
    }
  },
  {
    path: 'permission',
    component: DashboardComponent,
    data: {
      title: 'Permission Manager'
    }
  }, {
    path: 'setting',
    component: AppSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
