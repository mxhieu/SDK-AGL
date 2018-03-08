import { NgModule } from '@angular/core';
import { AppService } from '../service/app.service';
import { BaseService } from '../service/base.service';
import { GroupService } from '../service/group.service';
import { TelcoService } from '../service/telco.service';
import { ReportService } from '../service/report.service';
import { PlayerService } from '../service/player.service';
import { PaymentService } from '../service/payment.service';
import { CampaignService } from '../service/campaign.service';

@NgModule({
	providers: [
		BaseService, GroupService, TelcoService, ReportService,
		PlayerService, PaymentService, AppService, CampaignService]
})
export class SharedModule { }