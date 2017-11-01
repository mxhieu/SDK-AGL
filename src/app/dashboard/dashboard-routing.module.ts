import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component';
import { CampaignComponent } from './campaign.component';
import { AdreportComponent } from './adreport.component';

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
      title: 'App Manage'
    }
  },
  {
    path: 'campaign',
    component: CampaignComponent,
    data: {
      title: 'Campaign Manage'
    }
  },
  {
    path: 'user',
    component: DashboardComponent,
    data: {
      title: 'User Manage'
    }
  },
  {
    path: 'role',
    component: DashboardComponent,
    data: {
      title: 'Role Manage'
    }
  },
  {
    path: 'permission',
    component: DashboardComponent,
    data: {
      title: 'Permission Manage'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
