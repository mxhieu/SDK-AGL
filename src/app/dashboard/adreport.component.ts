import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http, URLSearchParams } from '@angular/http';
import { AmChartsService } from "@amcharts/amcharts3-angular";

import 'rxjs/Rx';

// In app component
import { ConfigService } from '../service.config';
import { ConnectService } from '../service.connect';

@Component({
  templateUrl: 'adreport.component.html'
})
export class AdreportComponent implements OnInit, OnDestroy {

  rout: any;
  data: any;
  conf: any;
  conn: any;
  chart: any;

  constructor(_rout: Router, _conf: ConfigService, _conn: ConnectService, private AmCharts: AmChartsService) { 
    this.rout = _rout;
    this.conf = _conf;
    this.conn = _conn;    

    this.conn.request('get', this.conf.api_suggestion_get, {}, 
    data=> {
      this.data = data.data;
    });    
  }

  ngOnInit(): void {
    this.chart = this.AmCharts.makeChart("wordchart", {
      "type": "xy",
      "theme": "light",
      "marginRight": 20,
      "dataDateFormat": "YYYY-MM-DD",
      "startDuration": 1.5,
      "trendLines": [],
      "balloon": {
          "adjustBorderColor": false,
          "shadowAlpha": 0,
          "fixedPosition":true
      },
      "graphs": [{
          "balloonText": "<div style='margin:5px;'><b>[[x]]</b><br>y:<b>[[y]]</b><br>value:<b>[[value]]</b></div>",
          "bullet": "round", "id": "AmGraph-1",
          "lineAlpha": 0, "lineColor": "#b0de09",
          "fillAlphas": 0, "valueField": "aValue",
          "xField": "date", "yField": "ay"
      }],
      "valueAxes": [{ "id": "ValueAxis-1", "axisAlpha": 0 }, 
                    { "id": "ValueAxis-2", "axisAlpha": 0, "position": "bottom", "type": "date", "minimumDate": new Date(2014, 11, 31), "maximumDate": new Date(2015, 0, 13)}],
      "allLabels": [],
      "titles": [],
      "dataProvider": [{
          "date": "2015-01-01",
          "id": 12,
          "ay": 6.5,
          "by": 2.2,
          "aValue": 15,
          "bValue": 10
      }, {
          "date": "2015-01-02",
          "ay": 12.3,
          "by": 4.9,
          "aValue": 8,
          "bValue": 3
      }, {
          "date": "2015-01-03",
          "ay": 12.3,
          "by": 5.1,
          "aValue": 16,
          "bValue": 4
      }, {
          "date": "2015-01-04",
          "ay": 2.8,
          "by": 13.3,
          "aValue": 9,
          "bValue": 13
      }, {
          "date": "2015-01-05",
          "ay": 3.5,
          "by": 6.1,
          "aValue": 5,
          "bValue": 2
      }, {
          "date": "2015-01-06",
          "ay": 5.1,
          "by": 8.3,
          "aValue": 10,
          "bValue": 17
      }, {
          "date": "2015-01-07",
          "ay": 6.7,
          "by": 10.5,
          "aValue": 3,
          "bValue": 10
      }, {
          "date": "2015-01-08",
          "ay": 8,
          "by": 12.3,
          "aValue": 5,
          "bValue": 13
      }, {
          "date": "2015-01-09",
          "ay": 8.9,
          "by": 4.5,
          "aValue": 8,
          "bValue": 11
      }, {
          "date": "2015-01-10",
          "ay": 9.7,
          "by": 15,
          "aValue": 15,
          "bValue": 10
      }, {
          "date": "2015-01-11",
          "ay": 10.4,
          "by": 10.8,
          "aValue": 1,
          "bValue": 11
      }, {
          "date": "2015-01-12",
          "ay": 1.7,
          "by": 19,
          "aValue": 12,
          "bValue": 3
      }],

      "export": { "enabled": true },
      "chartScrollbar": { "offset": 35, "scrollbarHeight": 2 },
      "chartCursor":{ "pan":true, "cursorAlpha":0, "valueLineAlpha":0 }
    });
    
    this.chart.addListener("clickGraphItem", (e)=> this.onChartItemClick(e));
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

  //////////
  // VIEW //
  //////////
  viewSuggestionDetail(suggestion) {    
    this.conn.request('get', this.conf.api_suggestion_search, {'trace': suggestion.trace},
    data=> {
      suggestion.details = data.data;
    })
  }

  // Handle
  onChartItemClick(e) {    
  }

  ///////////////////
  // H E L P E R S //
  ///////////////////
  helpUpperCaseAfterCommas = function(str) {
    return str.replace(/,\s*([a-z])/g, function(d,e) { return ", "+e.toUpperCase() });
  }    
}
