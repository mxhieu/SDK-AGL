import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';

import { AmChartsModule } from "@amcharts/amcharts3-angular";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component';
import { CampaignComponent } from './campaign.component';
import { AdreportComponent } from './adreport.component';

import { RxselectComponent } from './components/rxselect.component';
import { RxuploadComponent } from './components/rxupload.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    DropdownModule,
    FormsModule,
    AmChartsModule
  ],
  declarations: [ DashboardComponent,  AppComponent, CampaignComponent, RxselectComponent, RxuploadComponent, AdreportComponent ]
})
export class DashboardModule { }
