import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../../service.config';
import { ConnectService } from '../../service.connect';
import { Router } from '@angular/router';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

	public lineChartData: Array<any> = [
		/*{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
		{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },*/
		{ data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
	];
	public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	public lineChartOptions: any = {
		animation: false,
		responsive: true
	};
	public lineChartColours: Array<any> = [
		{ // grey
			backgroundColor: 'rgba(148,159,177,0.2)',
			borderColor: 'rgba(148,159,177,1)',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		},
		{ // dark grey
			backgroundColor: 'rgba(77,83,96,0.2)',
			borderColor: 'rgba(77,83,96,1)',
			pointBackgroundColor: 'rgba(77,83,96,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(77,83,96,1)'
		},
		{ // grey
			backgroundColor: 'rgba(148,159,177,0.2)',
			borderColor: 'rgba(148,159,177,1)',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		}
	];
	public lineChartLegend: boolean = true;
	public lineChartType: string = 'line';

	// Bar chart
	public barChartOptions: any = {
		scaleShowVerticalLines: false,
		responsive: true
	};
	public barChartLabels: string[] = ['06/2017', '07/2017', '08/2017', '09/2017', '10/2017', '11/2017'];
	public barChartType: string = 'bar';
	public barChartLegend: boolean = true;
	public barChartData: any[] = [
		{ data: [65, 59, 80, 81, 56, 55], label: 'Impressions' },
		{ data: [28, 48, 40, 19, 86, 27], label: 'Clicks' }
	];

	public doughnutChartLabels: string[] = ['Installs', 'Open', 'Login', 'Register', 'Create character', 'Done payment'];
	public doughnutChartData: number[] = [350, 450, 100, 50, 100, 400];
	public doughnutChartType: string = 'doughnut';

	// PolarArea
	public polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
	public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
	public polarAreaLegend: boolean = true;

	public polarAreaChartType: string = 'polarArea';

	data: any;
	trends: any[];
	statistics: any;

	constructor(
		private router: Router,
		private config: ConfigService,
		private connect: ConnectService) { 
		this.data = {};
		this.trends = [];
		this.statistics = {};
	}

	ngOnInit() {
		if (this.config.isExpired()) {
			this.router.navigate([this.config.LINK_TO_LOGIN]);
		} else {
			this.reset();
			this.getData();
		}
	}

	reset() {
		this.data = {};
		this.statistics = {
			'touch_points': '0',
			'total_installs': '0',
			'conversion_rate': '0',
			'total_revenue': '0',
			'returning_visitors': '0'
		};
	}

	getData() {

		var params = { 'search_app_id': this.config.getAppInfo()._id };

		this.connect.request('get', this.config.API_APP_OVERVIEW, params,
			data => {
				this.data = data.data;
				this.statistics = this.data.statistics;
				this.doughnutChartData = [
					this.data.daily_active.installs,
					this.data.daily_active.open,
					this.data.daily_active.login,
					this.data.daily_active.register,
					this.data.daily_active.create_character,
					0
				];
				this.trends = this.data.user_acquisition_trend;
				this.getTrends();
			});
	}

	getTrends() {
		this.barChartLabels = [];
		this.barChartData[0].data = [];
		this.barChartData[1].data = [];
		for (var i = 0; i < this.trends.length; i++) {
			this.barChartLabels.push(this.trends[i].date);
			this.barChartData[0].data.push(this.trends[i].impressions);
			this.barChartData[1].data.push(this.trends[i].clicks);
		}
	}
	// events
	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}
}