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
	analyze_kpi = 'report-kpi',
	analyze_card = 'report-card',
	analyze_cardChart = 'report-card/chart',
	analyze_realtime = 'report-realtime',
	analyze_realtimeChart = 'report-realtime/chart',
	analyze_retention = 'report-retention',
	analyze_retentionChart = 'report-retention/chart',

  analyze_armPackage = 'report-armpackage',
  analyze_armPackageChart = 'report-armpackage/chart',
  analyze_cardPackage = 'report-cardpackage',
  analyze_cardPackageChart = 'report-cardpackage/chart',
}

@Injectable()
export class ReportService extends BaseService {

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

	retentionAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_retention), params, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}

	retentionChartAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_retentionChart), params, data => {
			callback(data);
		});
	}

	realtimeAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_realtime), params, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}

	armChartAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_armChart), params, data => {
			callback(data);
		});
	}

	realtimeChartAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_realtimeChart), params, data => {
			callback(Array.isArray(data) ? data : []);
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

			var keys = {
				'a1': 'A1',
				'a7': 'A7',
				'a30':'A30',
				'nru0':'NRU0',
				'nru30':'NRU30',
				'npu1':'NPU1',
				'npu30':'NPU30',
				'pu':'PU',
				'pu1':'PU1',
				'pu30':'PU30',
				'gross_rev':'Gross Rev',
				'rev30':'Gross Rev 30',
				'revnpu1':'Gross Rev NPU1',
				'revnpu30':'Gross Rev NPU30',
				'arpu':'ARPU',
				'arppu':'ARPPU',
				'arppu30':'ARPPU30'};
			data.splice(0, 0, keys);
			callback(data);
		});
	}

	cardAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_card), params, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}

	cardChartAnalysis(params, callback) {
		this.get(this.getRestUrl(ChartApiUrls.analyze_cardChart), params, data => {
			callback(data);
		});
	}

  armPackageAnalysis(params, callback) {
    this.get(this.getRestUrl(ChartApiUrls.analyze_armPackage), params, data => {
      callback(Array.isArray(data) ? data : []);
    });
  }

  armPackageChartAnalysis(params, callback) {
    this.get(this.getRestUrl(ChartApiUrls.analyze_armPackageChart), params, data => {
      callback(data);
    });
  }

  cardPackageAnalysis(params, callback) {
    this.get(this.getRestUrl(ChartApiUrls.analyze_cardPackage), params, data => {
      callback(Array.isArray(data) ? data : []);
    });
  }

  cardPackageChartAnalysis(params, callback) {
    this.get(this.getRestUrl(ChartApiUrls.analyze_cardPackageChart), params, data => {
      callback(data);
    });
  }
}