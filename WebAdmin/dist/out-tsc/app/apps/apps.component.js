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
var service_1 = require("../service/service");
var AppsComponent = /** @class */ (function () {
    function AppsComponent(service) {
        this.service = service;
    }
    AppsComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AppsComponent.prototype.toggle = function () {
        this.isHidden = !this.isHidden;
    };
    AppsComponent.prototype.refresh = function () {
        if (this.service.isExpired()) {
            this.service.moveToLogin();
        }
        else {
            this.reset();
            this.getApps();
        }
    };
    AppsComponent.prototype.cancel = function () {
        this.refresh();
    };
    AppsComponent.prototype.reset = function () {
        this.isHidden = true;
        this.onerow = {
            'platform': 'android',
            'name': 'app' + new Date().getMilliseconds(),
            'bundle_id': 'com.coresdk.sampleapp',
            'icon': ''
        };
        this.apps = [];
    };
    AppsComponent.prototype.newApp = function () {
        var _this = this;
        this.service.newApp(this.onerow, function (data) { _this.refresh(); });
    };
    AppsComponent.prototype.getApps = function () {
        var _this = this;
        this.service.getApps({
            'pg_page': 1,
            'pg_size': 100
        }, function (data) {
            _this.apps = Array.isArray(data) ? data : [];
        });
    };
    AppsComponent.prototype.getUrl = function (icon) {
        return this.service.getUrl(icon);
    };
    AppsComponent.prototype.onItemClick = function (app) {
        this.service.moveToAppDetail(app._id);
    };
    AppsComponent = __decorate([
        core_1.Component({
            selector: 'app-apps',
            templateUrl: './apps.component.html'
        }),
        __metadata("design:paramtypes", [service_1.Service])
    ], AppsComponent);
    return AppsComponent;
}());
exports.AppsComponent = AppsComponent;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/apps/apps.component.js.map