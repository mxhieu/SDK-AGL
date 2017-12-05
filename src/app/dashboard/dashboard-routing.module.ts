import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component';
import { CampaignComponent } from './campaign.component';
import { EventComponent } from './event/event.component';
import { PlayerComponent } from './players/player.component';
import { AppSettingComponent } from './app-setting/app-setting.component';
import { SdkInformationComponent } from './sdk-information/sdk-information.component';
import { OverviewComponent } from './overview/overview.component';
import { PaymentComponent } from './payment/payment.component';
import { RemoteConfigComponent } from './remote-config/remote-config.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  }, {
    path: 'overview',
    component: OverviewComponent
  }, {
    path: 'sdk',
    component: SdkInformationComponent
  }, {
    path: 'event',
    component: EventComponent
  }, {
    path: 'user',
    component: DashboardComponent
  }, {
    path: 'player',
    component: PlayerComponent
  }, {
    path: 'setting',
    component: AppSettingComponent
  }, {
    path: 'payment',
    component: PaymentComponent
  }, {
    path: 'remote',
    component: RemoteConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
