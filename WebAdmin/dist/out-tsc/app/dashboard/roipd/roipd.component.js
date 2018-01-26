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
var RoipdComponent = /** @class */ (function () {
    function RoipdComponent(conf, service) {
        this.conf = conf;
        this.service = service;
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Install' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'NRU' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'RR1' },
            { data: [18, 48, 77, 9, 0, 27, 40], label: 'RR7' },
            { data: [18, 48, 77, 9, 0, 27, 40], label: 'RR30' }
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
        this.paging = { pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1 };
        this.header = [
            { id: 'date', name: 'Date', is_search: 1, st_col: 'date', st_type: 1 },
            { id: 'appName', name: 'AppName', is_search: 1, st_col: 'appName', st_type: 1 },
            { id: 'source', name: 'Media Source', is_search: 1, st_col: 'source', st_type: 1 },
            { id: 'os', name: 'Device Os', is_search: 1, st_col: 'os', st_type: 1 },
            { id: 'install', name: 'Install', is_search: 1, st_col: 'install', st_type: 1 },
            { id: 'rr3', name: 'RR3', is_search: 1, st_col: 'rr3', st_type: 1 },
            { id: 'pd1', name: 'PD1', is_search: 1, st_col: 'pd1', st_type: 1 },
            { id: 'pd3', name: 'PD3', is_search: 1, st_col: 'pd3', st_type: 1 },
            { id: 'pd7', name: 'PD7', is_search: 1, st_col: 'pd7', st_type: 1 },
            { id: 'pd14', name: 'PD14', is_search: 1, st_col: 'pd14', st_type: 1 },
            { id: 'pd21', name: 'PD21', is_search: 1, st_col: 'pd21', st_type: 1 },
            { id: 'pd30', name: 'PD30', is_search: 1, st_col: 'pd30', st_type: 1 }
        ];
        this.doAnalysis();
        this.getSources();
    }
    RoipdComponent.prototype.ngOnInit = function () {
    };
    RoipdComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.doAnalysis();
    };
    RoipdComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    RoipdComponent.prototype.sort = function ($event) {
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
    RoipdComponent.prototype.doAnalysis = function () {
        var _this = this;
        var params = {
            'app_id': this.service.getAppId(),
            'pg_page': this.paging.pg_page,
            'pg_size': this.paging.pg_size,
            'st_col': this.paging.st_col,
            'search_os': null,
            'search_sourceid': null,
            'startdate': this.dFrom.getTime(),
            'enddate': this.dTo.getTime(),
            'st_type': this.paging.st_type,
            key: this.search.term
        };
        if (this.platform.id != '-1')
            params.search_os = this.platform.name;
        if (this.source.sourceid != '-1')
            params.search_sourceid = this.source.sourceid;
        this.service.get(this.conf.API_REPORT_ROI_PD, params, function (data) {
            _this.data = Array.isArray(data) ? data : [];
            _this.isnext = (_this.data.length >= _this.paging.pg_size) ? true : false;
        });
    };
    RoipdComponent.prototype.getSources = function () {
        var _this = this;
        this.service.getSources(function (data) {
            _this.sources.push({ 'sourcename': "all", 'sourceid': '-1' });
            _this.sources = _this.sources.concat(data);
            _this.source = _this.sources[0];
        });
    };
    RoipdComponent = __decorate([
        core_1.Component({
            selector: 'app-roipd',
            templateUrl: './roipd.component.html',
            styleUrls: ['./roipd.component.scss']
        }),
        __metadata("design:paramtypes", [service_config_1.ConfigService, service_1.Service])
    ], RoipdComponent);
    return RoipdComponent;
}());
exports.RoipdComponent = RoipdComponent;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/dashboard/roipd/roipd.component.js.map