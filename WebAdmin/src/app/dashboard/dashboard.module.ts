import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { DashboardRoutingModule } from './dashboard-routing.module';
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
import { RoiComponent } from './roi/roi.component';
import { RoipdComponent } from './roipd/roipd.component';
import { GamereportComponent } from './gamereport/gamereport.component';

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
    EventComponent, PlayerComponent, AppSettingComponent, SdkInformationComponent, OverviewComponent, PaymentComponent,
    NotificationComponent,
    TelcoComponent,
    ArmpdComponent,
    ArmComponent,
    RoiComponent,
    RoipdComponent,
    GamereportComponent]
})
export class DashboardModule { }
