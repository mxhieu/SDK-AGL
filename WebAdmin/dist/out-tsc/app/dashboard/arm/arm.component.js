"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_1 = require("../../service/service");
var service_config_1 = require("../../service/service.config");
var amcharts3_angular_1 = require("@amcharts/amcharts3-angular");
require("rxjs/Rx");
var ArmComponent = /** @class */ (function () {
    function ArmComponent(conf, service, AmCharts) {
        this.conf = conf;
        this.service = service;
        this.AmCharts = AmCharts;
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Install', type: 'bar' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'NRU', type: 'bar' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'RR1', type: 'bar' },
            { data: [18, 48, 77, 9, 0, 27, 40], label: 'RR7', type: 'bar' },
            { data: [18, 48, 77, 9, 0, 27, 40], label: 'RR30', type: 'bar' }
        ];
        this.lineChartLabels = ['14 Jul', '15 Jul', '16 Jul', '17 Jul', '18 Jul', '19 Jul', '20 Jul'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColours = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        // Source list
        this.sources = [];
        this.source = { 'sourcename': "all", 'sourceid': '-1' };
        // Platform
        this.platforms = [
            {
                'id': '-1',
                'name': 'all'
            },
            {
                'id': 'android',
                'name': 'android'
            },
            {
                'id': 'ios',
                'name': 'ios'
            }
        ];
        this.platform = { 'id': '-1', 'name': 'all' };
        // Timing
        this.dTo = new Date();
        this.dFrom = new Date(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate() - 1000);
        this.data = [];
        this.platform = this.platforms[0];
        this.isnext = true;
        this.search = { field: 'name', term: '' };
        this.paging = { pg_page: 1, pg_size: 10, st_col: 'date', st_type: -1 };
        this.header = [
            { id: 'date', name: 'Date', is_search: 1, st_col: 'date', st_type: 1 },
            { id: 'source', name: 'Source', is_search: 1, st_col: 'source', st_type: 1 },
            { id: 'os', name: 'Device Os', is_search: 1, st_col: 'os', st_type: 1 },
            { id: 'install', name: 'Install', is_search: 1, st_col: 'install', st_type: 1 },
            { id: 'nru0', name: 'NRU0', is_search: 1, st_col: 'nru0', st_type: 1 },
            { id: 'nru', name: 'NRU', is_search: 1, st_col: 'nru', st_type: 1 },
            { id: 'nru0_install', name: 'NRU0/Install', is_search: 1, st_col: 'nru0_install', st_type: 1 },
            { id: 'cost', name: 'Cost(USD)', is_search: 1, st_col: 'cost', st_type: 1 },
            { id: 'cpi', name: 'CPI', is_search: 1, st_col: 'cpi', st_type: 1 },
            { id: 'rr1', name: 'RR1', is_search: 1, st_col: 'rr1', st_type: 1 },
            { id: 'rr7', name: 'RR7', is_search: 1, st_col: 'rr7', st_type: 1 },
            { id: 'rr30', name: 'RR30', is_search: 1, st_col: 'rr30', st_type: 1 },
            { id: 'uv30', name: 'UV30', is_search: 1, st_col: 'uv30', st_type: 1 },
            { id: 'cr7', name: 'CR7', is_search: 1, st_col: 'cr7', st_type: 1 },
            { id: 'rev7', name: 'REV7', is_search: 1, st_col: 'rev7', st_type: 1 },
            { id: 'cr30', name: 'CR30', is_search: 1, st_col: 'cr30', st_type: 1 },
            { id: 'rev30', name: 'REV30', is_search: 1, st_col: 'rev30', st_type: 1 }
        ];
        this.doAnalysis();
        this.getSources();
    }
    ArmComponent.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    };
    // Make armchart random data
    ArmComponent.prototype.makeRandomDataProvider = function () {
        var dataProvider = [];
        // Generate random data
        for (var year = 1950; year <= 2005; ++year) {
            dataProvider.push({
                year: '' + year,
                value: Math.floor(Math.random() * 100) - 50
            });
        }
        return dataProvider;
    };
    // Make armchart options
    ArmComponent.prototype.makeOptions = function (dataProvider) {
        return {
            'type': 'serial',
            'theme': 'light',
            'marginTop': 0,
            'marginRight': 80,
            'dataProvider': dataProvider,
            'valueAxes': [{
                    'axisAlpha': 0,
                    'position': 'left'
                }],
            'graphs': [{
                    'id': 'g1',
                    'balloonText': '[[category]]<br><b><span style=\'font-size:14px;\'>[[value]]</span></b>',
                    'bullet': 'round',
                    'bulletSize': 8,
                    'lineColor': '#d1655d',
                    'lineThickness': 2,
                    'negativeLineColor': '#637bb6',
                    'type': 'smoothedLine',
                    'valueField': 'value'
                }],
            'chartScrollbar': {
                'graph': 'g1',
                'gridAlpha': 0,
                'color': '#888888',
                'scrollbarHeight': 55,
                'backgroundAlpha': 0,
                'selectedBackgroundAlpha': 0.1,
                'selectedBackgroundColor': '#888888',
                'graphFillAlpha': 0,
                'autoGridCount': true,
                'selectedGraphFillAlpha': 0,
                'graphLineAlpha': 0.2,
                'graphLineColor': '#c2c2c2',
                'selectedGraphLineColor': '#888888',
                'selectedGraphLineAlpha': 1
            },
            'chartCursor': {
                'categoryBalloonDateFormat': 'YYYY',
                'cursorAlpha': 0,
                'valueLineEnabled': true,
                'valueLineBalloonEnabled': true,
                'valueLineAlpha': 0.5,
                'fullWidth': true
            },
            'dataDateFormat': 'YYYY',
            'categoryField': 'year',
            'categoryAxis': {
                'minPeriod': 'YYYY',
                'parseDates': true,
                'minorGridAlpha': 0.1,
                'minorGridEnabled': true
            },
            'export': {
                'enabled': true
            }
        };
    };
    ArmComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Create chartdiv1
        this.options = this.makeOptions(this.makeRandomDataProvider());
        // Create chartdiv2
        this.chart2 = this.AmCharts.makeChart('chartdiv2', this.makeOptions(this.makeRandomDataProvider()));
        this.timer = setInterval(function () {
            // Update chartdiv1
            _this.options = _this.makeOptions(_this.makeRandomDataProvider());
            // Update chartdiv2
            _this.AmCharts.updateChart(_this.chart2, function () {
                _this.chart2.dataProvider = _this.makeRandomDataProvider();
            });
        }, 3000);
    };
    ArmComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.doAnalysis();
    };
    ArmComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    ArmComponent.prototype.sort = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol) {
                this.paging.st_type *= -1;
            }
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.doAnalysis();
        }
    };
    ArmComponent.prototype.doAnalysis = function () {
        var _this = this;
        var params = {
            'app_id': this.service.getAppId(),
            'pg_page': this.paging.pg_page,
            'pg_size': this.paging.pg_size,
            'st_col': this.paging.st_col,
            'search_os': null,
            'search_sourceid': null,
            'startdate': Math.round(this.dFrom.getTime() / 1000),
            'enddate': Math.round(this.dTo.getTime() / 1000),
            'st_type': this.paging.st_type,
            key: this.search.term
        };
        if (this.platform.id != '-1')
            params.search_os = this.platform.name;
        if (this.source.sourceid != '-1')
            params.search_sourceid = this.source.sourceid;
        this.service.get(this.conf.API_REPORT_ARM, params, function (data) {
            _this.data = Array.isArray(data) ? data : [];
            _this.isnext = (_this.data.length >= _this.paging.pg_size) ? true : false;
        });
    };
    ArmComponent.prototype.getSources = function () {
        var _this = this;
        this.service.getSources(function (data) {
            _this.sources.push({ 'sourcename': "all", 'sourceid': '-1' });
            _this.sources = _this.sources.concat(data);
            _this.source = _this.sources[0];
        });
    };
    ArmComponent = __decorate([
        core_1.Component({
            selector: 'app-arm',
            templateUrl: './arm.component.html',
            styleUrls: ['./arm.component.scss']
        }),
        __metadata("design:paramtypes", [service_config_1.ConfigService, service_1.Service, amcharts3_angular_1.AmChartsService])
    ], ArmComponent);
    return ArmComponent;
}());
exports.ArmComponent = ArmComponent;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/dashboard/arm/arm.component.js.map