import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
	// barChart
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

	public doughnutChartLabels: string[] = ['Intalls', 'Open', 'Login', 'Register', 'Create character', 'Done payment'];
	public doughnutChartData: number[] = [350, 450, 100, 50, 100, 400];
	public doughnutChartType: string = 'doughnut';

	// PolarArea
	public polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
	public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
	public polarAreaLegend: boolean = true;

	public polarAreaChartType: string = 'polarArea';

	constructor() { }

	ngOnInit() {
	}

	// events
	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}
}