import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../service/report.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  data = [];
  version: any; versions = [{ 'version': '', 'os': '' }]; versionDisplay = [{ 'version': '', 'os': '' }];
  source: any; sources = [{ 'source_group': "All", 'source': '-1' }];
  platform: any; platforms = [];
  dFrom: Date; dMin: Date; dTo: Date = new Date(); dMax: Date = new Date();
  chart: AmChart; chart1: AmChart;
  osVerionDisplay : boolean;

  constructor(private service: ReportService, private AmCharts: AmChartsService) {
    this.source = this.sources[0];
    this.platforms = this.service.defaultPlatforms();
    this.platform = this.platforms[0];
    this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate(), 30);
    this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate(), 365);
  }

  ngOnInit() {
    if (!this.service.isExpired()){ 
      this.getSources();
      this.doAnalysis();
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
    if (this.chart1) {
      this.AmCharts.destroyChart(this.chart1);
    }
  }

  doAnalysis() {
    var params = {
      'app_id':null,
      'app_group_id':this.service.getGroupId(),
      'search_app_id':null,
      'search_os':null,
      'startdate': Math.round(this.dFrom.getTime() / 1000),
      'enddate': Math.round(this.dTo.getTime() / 1000)
    };
    if (this.platform.id != '-1'){
      params.search_os = this.platform.id;
      params.search_app_id = this.service.getAppId();
    }
    this.service.overviewChartAnalysis(params, data => {
      this.data = data;
      this.makeChart(data);
    });
  }

  makeChart(chartData: any[]) {
    chartData.sort((l, r): number => {
      var date1 = Date.parse(l.date);
      var date2 = Date.parse(r.date);
      if (date1 > date2)
        return 1;
      if (date1 < date2)
        return -1;
      return 0;
    });
    this.chart = this.AmCharts.makeChart("chartdiv1", {
      "type": "serial",
      "theme": "light",
      "legend": {
        "equalWidths": false,
        "useGraphSettings": true,
        "valueAlign": "left",
        "valueWidth": 120
      },
      "dataProvider": chartData,
      "valueAxes": [{
        "id": "leftAxis",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left"
      }, {
        "id": "rightAxis",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "right"
      }],
      "graphs": [{
        "alphaField": "alpha",
        "balloonText": "A1:[[value]]",
        "bullet": "round",
        "dashLengthField": "dashLength",
        "fillAlphas": 0.7,
        "legendPeriodValueText": "total: [[value.sum]]",
        "legendValueText": "[[value]]",
        "title": "A1",
        "type": "line",
        "valueField": "a1",
        "valueAxis": "leftAxis",
        'fillColors': "#80e8e8",
        'lineColor': '#3fcab0'
      }, {
        "alphaField": "alpha",
        "balloonText": "NRU0:[[value]]",
        "bullet": "round",
        "dashLengthField": "dashLength",
        "fillAlphas": 0.7,
        "legendPeriodValueText": "total: [[value.sum]]",
        "legendValueText": "[[value]]",
        "title": "NRU0",
        "type": "line",
        "valueField": "nru0",
        "valueAxis": "leftAxis",
        'fillColors': "#3b8ad9",
        'lineColor': '#1976d2'
      }, {
        "balloonText": "REV:[[value]]",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "useLineColorForBulletBorder": true,
        "bulletColor": "#FFFFFF",
        "bulletSizeField": "townSize",
        "dashLengthField": "dashLength",
        "descriptionField": "",
        "labelPosition": "right",
        "labelText": "[[]]",
        "legendPeriodValueText": "total: [[value.sum]]",
        "legendValueText": "[[value]]",
        "title": "REV",
        "fillAlphas": 0,
        "valueField": "gross_rev",
        'lineColor': '#d651ef',
        "valueAxis": "rightAxis"
      }],
      "chartCursor": {
        "categoryBalloonDateFormat": "DD",
        "cursorAlpha": 0.1,
        "cursorColor": "#000000",
        "fullWidth": true,
        "valueBalloonsEnabled": false,
        "zoomable": false
      },
      "dataDateFormat": "YYYY-MM-DD",
      "categoryField": "date",
      "categoryAxis": {
        "dateFormats": [{
          "period": "DD",
          "format": "DD"
        }, {
          "period": "WW",
          "format": "MMM DD"
        }, {
          "period": "MM",
          "format": "MMM"
        }, {
          "period": "YYYY",
          "format": "YYYY"
        }],
        "parseDates": true,
        "autoGridCount": false,
        "axisColor": "#555555",
        "gridAlpha": 0.1,
        "gridColor": "#FFFFFF",
        "gridCount": 50
      },
      "export": {
        "enabled": true
      }
    });

    this.chart1 = this.AmCharts.makeChart("chartdiv2", {
      "type": "serial",
      "theme": "light",
      "legend": {
        "equalWidths": false,
        "useGraphSettings": true,
        "valueAlign": "left",
        "valueWidth": 120
      },
      "dataProvider": chartData,
      "valueAxes": [{
        "id": "leftAxis",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left"
      }, {
        "id": "rightAxis",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "right"
      }],
      "graphs": [{
        "alphaField": "alpha",
        "balloonText": "PU:[[value]]",
        "legendPeriodValueText": "total: [[value.sum]]",
        "dashLengthField": "dashLength",
        "fillAlphas": 0.7,
        "legendValueText": "[[value]]",
        "title": "PU",
        "type": "column",
        "valueField": "pu1",
        "valueAxis": "leftAxis",
        'fillColors': "#7bc0f7",
        'lineColor': '#64b5f6'
      }, {
        "balloonText": "ARPU:[[value]]",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "useLineColorForBulletBorder": true,
        "bulletColor": "#FFFFFF",
        "bulletSizeField": "townSize",
        "dashLengthField": "dashLength",
        "descriptionField": "",
        "labelPosition": "right",
        "labelText": "[[]]",
        "legendValueText": "[[value]]",
        "title": "ARPU",
        "fillAlphas": 0,
        "valueField": "arpu",
        'lineColor': '#d651ef',
        "valueAxis": "rightAxis"
      }, {
        "balloonText": "ARPPU:[[value]]",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "useLineColorForBulletBorder": true,
        "bulletColor": "#FFFFFF",
        "bulletSizeField": "townSize",
        "dashLengthField": "dashLength",
        "descriptionField": "",
        "labelPosition": "right",
        "labelText": "[[]]",
        "legendValueText": "[[value]]",
        "title": "ARPPU",
        "fillAlphas": 0,
        "valueField": "arppu",
        'lineColor': '#ffdb69',
        "valueAxis": "rightAxis"
      }],
      "chartCursor": {
        "categoryBalloonDateFormat": "DD",
        "cursorAlpha": 0.1,
        "cursorColor": "#000000",
        "fullWidth": true,
        "valueBalloonsEnabled": false,
        "zoomable": false
      },
      "dataDateFormat": "YYYY-MM-DD",
      "categoryField": "date",
      "categoryAxis": {
        "dateFormats": [{
          "period": "DD",
          "format": "DD"
        }, {
          "period": "WW",
          "format": "MMM DD"
        }, {
          "period": "MM",
          "format": "MMM"
        }, {
          "period": "YYYY",
          "format": "YYYY"
        }],
        "parseDates": true,
        "autoGridCount": false,
        "axisColor": "#555555",
        "gridAlpha": 0.1,
        "gridColor": "#FFFFFF",
        "gridCount": 50
      },
      "export": {
        "enabled": true
      }
    });
  }

  numberWithCommas(x) {
    if (typeof x === 'string' || x instanceof String) {
      return x
    } else {
      if (typeof x === 'undefined') {
        return 0
      } else {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
    }
  }

  getSources() {
    this.service.getSources(data => {

      // Sources
      this.sources = this.sources.concat(data.source);
      this.source = this.sources[0];

      // Os
      this.versions = data.os.settings;
      this.versionDisplay = this.versions;
      this.version = this.versionDisplay[0];
    }, 'report-cohort/listsource');
  }

  onVersionChanged(event) {
    this.service.setAppId(event.app_id);
  }
  osPickerChanged(event) {

    this.versionDisplay = [];

    if (event.id == '-1')
      this.osVerionDisplay = false;
    else{
      this.osVerionDisplay = true;
      for (var v of this.versions){
        if (v.os == event.id)
          this.versionDisplay.push(v);
      }
      this.version = this.versionDisplay[0];
      this.service.setAppId(this.version.app_id);
    }
  }
}
