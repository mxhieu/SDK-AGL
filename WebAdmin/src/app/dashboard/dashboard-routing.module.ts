import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { PlayerComponent } from './player/player.component';
import { AppSettingComponent } from './app-setting/app-setting.component';
import { SdkInformationComponent } from './sdk-information/sdk-information.component';
import { OverviewComponent } from './overview/overview.component';
import { PaymentComponent } from './payment/payment.component';
import { NotificationComponent } from './notification/notification.component';
import { TelcoComponent } from './telco/telco.component';
import { ArmpdComponent } from './armpd/armpd.component';
import { ArmComponent } from './arm/arm.component';

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
  },
  {
    path: 'armpd',
    component: ArmpdComponent
  },
  {
    path: 'arm',
    component: ArmComponent
  }
  , {
    path: 'player',
    component: PlayerComponent
  }, {
    path: 'setting',
    component: AppSettingComponent
  }, {
    path: 'payment',
    component: PaymentComponent
  },{
    path: 'telco',
    component: TelcoComponent
  }, {
    path: 'notification',
    component: NotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
