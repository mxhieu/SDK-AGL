import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PlayerComponent } from './player/player.component';
import { AppSettingComponent } from './app-setting/app-setting.component';
import { PaymentComponent } from './payment/payment.component';
import { NotificationComponent } from './notification/notification.component';
import { TelcoComponent } from './telco/telco.component';
import { ArmpdComponent } from './armpd/armpd.component';
import { ArmComponent } from './arm/arm.component';
import { RoiComponent } from './roi/roi.component';
import { RoipdComponent } from './roipd/roipd.component';

// 3rd party
import { AmChartsModule } from "@amcharts/amcharts3-angular";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    DropdownModule,
    FormsModule,
    AmChartsModule
  ],
  declarations: [
    PlayerComponent, AppSettingComponent, PaymentComponent,
    NotificationComponent, TelcoComponent, ArmpdComponent, ArmComponent,
    RoiComponent, RoipdComponent]
})
export class DashboardModule { }
