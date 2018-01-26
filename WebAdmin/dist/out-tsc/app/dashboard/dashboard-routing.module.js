"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var event_component_1 = require("./event/event.component");
var player_component_1 = require("./player/player.component");
var app_setting_component_1 = require("./app-setting/app-setting.component");
var sdk_information_component_1 = require("./sdk-information/sdk-information.component");
var overview_component_1 = require("./overview/overview.component");
var payment_component_1 = require("./payment/payment.component");
var notification_component_1 = require("./notification/notification.component");
var telco_component_1 = require("./telco/telco.component");
var armpd_component_1 = require("./armpd/armpd.component");
var arm_component_1 = require("./arm/arm.component");
var roi_component_1 = require("./roi/roi.component");
var roipd_component_1 = require("./roipd/roipd.component");
var routes = [
    {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
    }, {
        path: 'overview',
        component: overview_component_1.OverviewComponent
    }, {
        path: 'sdk',
        component: sdk_information_component_1.SdkInformationComponent
    }, {
        path: 'event',
        component: event_component_1.EventComponent
    }, {
        path: 'armpd',
        component: armpd_component_1.ArmpdComponent
    }, {
        path: 'arm',
        component: arm_component_1.ArmComponent
    }, {
        path: 'roi',
        component: roi_component_1.RoiComponent
    }, {
        path: 'roipd',
        component: roipd_component_1.RoipdComponent
    }, {
        path: 'player',
        component: player_component_1.PlayerComponent
    }, {
        path: 'setting',
        component: app_setting_component_1.AppSettingComponent
    }, {
        path: 'payment',
        component: payment_component_1.PaymentComponent
    }, {
        path: 'telco',
        component: telco_component_1.TelcoComponent
    }, {
        path: 'notification',
        component: notification_component_1.NotificationComponent
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
exports.DashboardRoutingModule = DashboardRoutingModule;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/dashboard/dashboard-routing.module.js.map