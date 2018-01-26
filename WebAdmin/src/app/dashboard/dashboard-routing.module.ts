import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { AppSettingComponent } from './app-setting/app-setting.component';
import { SdkInformationComponent } from './sdk-information/sdk-information.component';
import { PaymentComponent } from './payment/payment.component';
import { NotificationComponent } from './notification/notification.component';
import { TelcoComponent } from './telco/telco.component';
import { ArmpdComponent } from './armpd/armpd.component';
import { ArmComponent } from './arm/arm.component';
import { RoiComponent } from './roi/roi.component';
import { RoipdComponent } from './roipd/roipd.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'arm',
    pathMatch: 'full'
  },{
    path: 'sdk',
    component: SdkInformationComponent
  },{
    path: 'armpd',
    component: ArmpdComponent
  },{
    path: 'arm',
    component: ArmComponent
  },{
    path: 'roi',
    component: RoiComponent
  },{
    path: 'roipd',
    component: RoipdComponent
  },{
    path: 'player',
    component: PlayerComponent
  },{
    path: 'setting',
    component: AppSettingComponent
  },{
    path: 'payment',
    component: PaymentComponent
  },{
    path: 'telco',
    component: TelcoComponent
  },{
    path: 'notification',
    component: NotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
