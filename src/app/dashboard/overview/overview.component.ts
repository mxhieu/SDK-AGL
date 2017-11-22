import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service.config';
import { ConnectService } from '../../service.connect';
import { Router } from '@angular/router';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

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

	data : any;
	statistics : any;
	trends :any[];

	constructor(
		private router: Router,
		private config: ConfigService,
		private connect: ConnectService) { }

	ngOnInit() {
		if (this.config.isExpired()) {
			this.router.navigate([this.config.LINK_TO_LOGIN]);
		} else {
			this.reset();
			this.getData();
		}
	}

	reset(){
		this.data = {};
		this.statistics = {
			'touch_points':'0', 
			'total_installs':'0', 
			'conversion_rate':'0', 
			'total_revenue':'0', 
			'returning_visitors':'0'
		};
	}

	getData(){
		this.connect.request('get', this.config.API_APP_OVERVIEW, null,
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
				this.trends =  this.data.user_acquisition_trend;
				this.getTrends();
		});
	}

	getTrends(){
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