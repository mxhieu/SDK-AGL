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
var AppSettingComponent = /** @class */ (function () {
    function AppSettingComponent(api, config) {
        this.api = api;
        this.config = config;
        this.appInfo = {
            'settings': {},
            'version': 1.0,
            'icon': '',
            'logo': ''
        };
    }
    AppSettingComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AppSettingComponent.prototype.refresh = function () {
        var _this = this;
        if (this.api.isExpired())
            this.api.moveToLogin();
        else {
            this.api.get(this.config.API_APP_DETAIL, {
                'id': this.config.getAppId()
            }, function (data) {
                _this.appInfo = data;
            });
        }
    };
    AppSettingComponent.prototype.resetKey = function () {
        var _this = this;
        this.api.get(this.config.API_APP_KEY_RESET, {
            'id': this.config.getAppId()
        }, function (data) {
            _this.appInfo.key = data;
        });
    };
    AppSettingComponent.prototype.update = function () {
        var _this = this;
        this.api.post(this.config.API_APP_EDIT, JSON.stringify(this.appInfo), { 'id': this.config.getAppId() }, function (data) {
            _this.refresh();
        });
    };
    AppSettingComponent.prototype.delete = function () {
        var _this = this;
        this.api.get(this.config.API_APP_DELETE, {
            'id': this.config.getAppId()
        }, function (data) {
            _this.api.moveToApps();
        });
    };
    AppSettingComponent.prototype.onStatusChange = function () {
        this.appInfo.is_active = (this.appInfo.is_active == 1 ? 0 : 1);
        this.update();
    };
    AppSettingComponent.prototype.getUrl = function (icon) {
        return this.api.getUrl(icon);
    };
    AppSettingComponent.prototype.onForceUpdateChante = function () {
        this.appInfo.settings.is_force_update = (this.appInfo.settings.is_force_update == true ? false : true);
        this.update();
    };
    AppSettingComponent.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.api.upload(file, function (data) {
                _this.appInfo.icon = data;
            });
        }
    };
    AppSettingComponent.prototype.fileLogoChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.api.upload(file, function (data) {
                _this.appInfo.logo = data;
            });
        }
    };
    AppSettingComponent = __decorate([
        core_1.Component({
            selector: 'app-app-setting',
            templateUrl: './app-setting.component.html',
            providers: [service_1.Service],
            styleUrls: ['./app-setting.component.scss']
        }),
        __metadata("design:paramtypes", [service_1.Service,
            service_config_1.ConfigService])
    ], AppSettingComponent);
    return AppSettingComponent;
}());
exports.AppSettingComponent = AppSettingComponent;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/dashboard/app-setting/app-setting.component.js.map