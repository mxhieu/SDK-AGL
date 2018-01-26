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
var TelcoComponent = /** @class */ (function () {
    function TelcoComponent(config, service) {
        this.config = config;
        this.service = service;
    }
    TelcoComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    TelcoComponent.prototype.getData = function () {
        var _this = this;
        this.service.get(this.config.API_PAYMENT_GET_CARD_ITEMS, {
            'search_app_id': this.service.getAppId(),
            'st_col': this.paging.st_col,
            'st_type': this.paging.st_type
        }, function (data) {
            _this.items = Array.isArray(data) ? data : [];
        });
    };
    TelcoComponent.prototype.refresh = function () {
        if (this.service.isExpired()) {
            this.service.moveToLogin();
        }
        else {
            this.reset();
            this.getData();
        }
    };
    TelcoComponent.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.service.upload(file, function (data) {
                _this.onerow.icon = data;
            });
        }
    };
    TelcoComponent.prototype.cancel = function () {
        this.refresh();
    };
    TelcoComponent.prototype.onRowClick = function (item) {
        this.onerow = item;
        this.isHidden = false;
        this.isEdit = true;
    };
    TelcoComponent.prototype.update = function () {
        var _this = this;
        this.service.post(this.config.API_PAYMENT_CARD_EDIT, this.onerow, null, function (data) {
            _this.refresh();
        });
    };
    TelcoComponent.prototype.save = function () {
        var _this = this;
        this.service.post(this.config.API_PAYMENT_ADD_CARDS, this.onerow, null, function (data) {
            _this.refresh();
        });
    };
    TelcoComponent.prototype.delete = function () {
        var _this = this;
        this.service.get(this.config.API_PAYMENT_CARD_ITEMS_DELETE, this.onerow, function (data) {
            _this.refresh();
        });
    };
    TelcoComponent.prototype.getUrl = function (icon) {
        return this.service.getUrl(icon);
    };
    TelcoComponent.prototype.reset = function () {
        this.isEdit = false;
        this.isHidden = true;
        this.onerow = {
            'price': 1000,
            'name': 'items' + new Date().getMilliseconds(),
            'desc': 'New in-app items',
            'icon': '',
            'app_id': this.service.getAppId(),
            'is_active': 1
        };
        this.items = [];
        this.paging = { pg_page: 1, pg_size: 100 };
    };
    TelcoComponent.prototype.toggle = function () {
        this.isHidden = !this.isHidden;
        this.isEdit = false;
    };
    TelcoComponent = __decorate([
        core_1.Component({
            selector: 'app-telco',
            templateUrl: './telco.component.html'
        }),
        __metadata("design:paramtypes", [service_config_1.ConfigService,
            service_1.Service])
    ], TelcoComponent);
    return TelcoComponent;
}());
exports.TelcoComponent = TelcoComponent;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/dashboard/telco/telco.component.js.map