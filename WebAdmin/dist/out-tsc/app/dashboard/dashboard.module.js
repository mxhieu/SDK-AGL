"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var dropdown_1 = require("ng2-bootstrap/dropdown");
var forms_1 = require("@angular/forms");
var amcharts3_angular_1 = require("@amcharts/amcharts3-angular");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
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
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                dashboard_routing_module_1.DashboardRoutingModule,
                ng2_charts_1.ChartsModule,
                dropdown_1.DropdownModule,
                forms_1.FormsModule,
                amcharts3_angular_1.AmChartsModule
            ],
            declarations: [
                event_component_1.EventComponent, player_component_1.PlayerComponent, app_setting_component_1.AppSettingComponent, sdk_information_component_1.SdkInformationComponent, overview_component_1.OverviewComponent, payment_component_1.PaymentComponent,
                notification_component_1.NotificationComponent,
                telco_component_1.TelcoComponent,
                armpd_component_1.ArmpdComponent,
                arm_component_1.ArmComponent,
                roi_component_1.RoiComponent,
                roipd_component_1.RoipdComponent
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/dashboard/dashboard.module.js.map