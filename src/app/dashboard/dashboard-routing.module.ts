import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component';
import { CampaignComponent } from './campaign.component';
import { AdreportComponent } from './adreport.component';
import { TrackingComponent } from './tracking.component';
import { PlayerComponent } from './player.component';

const routes: Routes = [
  {
    path: 'index',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }    
  },
  {
    path: 'keyword',
    component: DashboardComponent,
    data: {
      title: 'keywords'
    }
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
    component: AppComponent,
    data: {
      title: 'App Manager'
    }
  },
  {
    path: 'campaign',
    component: CampaignComponent,
    data: {
      title: 'Campaign Manager'
    }
  },
  {
    path: 'tracking',
    component: TrackingComponent,
    data: {
      title: 'Tracking Manager'
    }
  },
  {
    path: 'user',
    component: DashboardComponent,
    data: {
      title: 'User Manager'
    }
  },
  {
    path: 'player',
    component: PlayerComponent,
    data: {
      title: 'Player Manager'
    }
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
