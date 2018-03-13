import { NgModule } from '@angular/core';
import { BaseService } from '../service/base.service';
import { GroupService } from '../service/group.service';
import { TelcoService } from '../service/telco.service';
import { ReportService } from '../service/report.service';
import { PlayerService } from '../service/player.service';
import { PaymentService } from '../service/payment.service';
import { CampaignService } from '../service/campaign.service';
import { PlayerAdsService } from '../service/player-ads.service';

@NgModule({
	providers: [
		BaseService, GroupService, TelcoService, ReportService,
		PlayerService, PaymentService, CampaignService, PlayerAdsService]
})
export class SharedModule { }