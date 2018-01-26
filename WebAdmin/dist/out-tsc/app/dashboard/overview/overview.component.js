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
var service_config_1 = require("../../service/service.config");
var service_1 = require("../../service/service");
var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(config, service) {
        this.config = config;
        this.service = service;
        this.lineChartData = [
            /*{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },*/
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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
        // Bar chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['06/2017', '07/2017', '08/2017', '09/2017', '10/2017', '11/2017'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55], label: 'Impressions' },
            { data: [28, 48, 40, 19, 86, 27], label: 'Clicks' }
        ];
        this.doughnutChartLabels = ['Installs', 'Open', 'Login', 'Register', 'Create character', 'Done payment'];
        this.doughnutChartData = [350, 450, 100, 50, 100, 400];
        this.doughnutChartType = 'doughnut';
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        this.data = {};
        this.trends = [];
        this.statistics = {};
    }
    OverviewComponent.prototype.ngOnInit = function () {
        if (this.service.isExpired()) {
            this.service.moveToLogin();
        }
        else {
            this.reset();
            this.getData();
        }
    };
    OverviewComponent.prototype.reset = function () {
        this.data = {};
        this.statistics = {
            'touch_points': '0',
            'total_installs': '0',
            'conversion_rate': '0',
            'total_revenue': '0',
            'returning_visitors': '0'
        };
    };
    OverviewComponent.prototype.getData = function () {
        var _this = this;
        this.service.get(this.config.API_APP_OVERVIEW, {
            'search_app_id': this.service.getAppId()
        }, function (data) {
            _this.data = data;
            _this.statistics = _this.data.statistics;
            _this.doughnutChartData = [
                _this.data.daily_active.installs,
                _this.data.daily_active.open,
                _this.data.daily_active.login,
                _this.data.daily_active.register,
                _this.data.daily_active.create_character, 0
            ];
            _this.trends = _this.data.user_acquisition_trend;
            _this.getTrends();
        });
    };
    OverviewComponent.prototype.getTrends = function () {
        this.barChartLabels = [];
        this.barChartData[0].data = [];
        this.barChartData[1].data = [];
        for (var i = 0; i < this.trends.length; i++) {
            this.barChartLabels.push(this.trends[i].date);
            this.barChartData[0].data.push(this.trends[i].impressions);
            this.barChartData[1].data.push(this.trends[i].clicks);
        }
    };
    // events
    OverviewComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    OverviewComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    OverviewComponent = __decorate([
        core_1.Component({
            selector: 'app-overview',
            templateUrl: './overview.component.html'
        }),
        __metadata("design:paramtypes", [service_config_1.ConfigService, service_1.Service])
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/dashboard/overview/overview.component.js.map