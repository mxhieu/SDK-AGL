import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

enum ChartApiUrls {
	analyze_roi = 'report-roi',
	analyze_roiPd = 'report-roiPd',
	analyze_arm = 'report-arm',
	analyze_armChart = 'report-arm/chart',
	analyze_armPd = 'report-armPd',
	analyze_armPdChart = 'report-armPd/chart',
	analyze_cohort = 'report-cohort',
	analyze_kpi = 'report-kpi'
}

@Injectable()
export class ReportService extends BaseService {


	defaultPlatforms() {
		return [
			{ 'id': '-1', 'name': 'All' },
			{ 'id': 'android', 'name': 'Android' },
			{ 'id': 'ios', 'name': 'iOS' },
			{ 'id': 'web', 'name': 'Web' }];
	}

	roiAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_roi), params, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}

	roiPdAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_roiPd), params, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}

	armAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_arm), params, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}

	armChartAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_armChart), params, data => {
			callback(data);
		});
	}

	armPdAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_armPd), params, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}

	armPdChartAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_armPdChart), params, data => {
			callback(data);
		});
	}

	cohortAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_cohort), params, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}
	kpiAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_kpi), params, data => {
			for (var i = 0; i < data.length; i++) {
				if (i == 0)
					data[i].type = 'To day';
				else if (i == 1)
					data[i].type = 'Yesterday';
				else if (i == 2)
					data[i].type = '1 week ago';
			}
			callback(data);
		});
	}
}