import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

enum ChartApiUrls {
	analyze_roi = 'report-roi',
	analyze_roiPd = 'report-roiPd',
	analyze_arm = 'report-arm',
	analyze_armChart = 'report-arm/chart',
	analyze_armPd = 'report-armPd',
	analyze_armPdChart = 'report-armPd/chart',
	analyze_cohort = 'report-cohort'
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

		var data = [
			{
				'type': 'A7',
				'today': '100',
				'yesterday': '120',
				'one_week_ago': '80'
			},
			{
				'type': 'Gross Rev',
				'today': '90',
				'yesterday': '110',
				'one_week_ago': '150'
			},
			{
				'type': 'PU',
				'today': '120',
				'yesterday': '60',
				'one_week_ago': '40'
			},
			{
				'type': 'PU1',
				'today': '100',
				'yesterday': '140',
				'one_week_ago': '80'
			},
			{
				'type': 'ARPU',
				'today': '90',
				'yesterday': '120',
				'one_week_ago': '100'
			}
			,
			{
				'type': 'ARPPU',
				'today': '70',
				'yesterday': '80',
				'one_week_ago': '100'
			}]
		callback(Array.isArray(data) ? data : []);
	}
}