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
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(config, service) {
        this.config = config;
        this.service = service;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    PaymentComponent.prototype.getData = function () {
        var _this = this;
        this.service.get(this.config.API_PAYMENT_GET_ITEMS, {
            'search_app_id': this.service.getAppId(),
            'st_col': this.paging.st_col,
            'st_type': this.paging.st_type
        }, function (data) {
            _this.items = Array.isArray(data) ? data : [];
        });
    };
    PaymentComponent.prototype.refresh = function () {
        if (this.service.isExpired()) {
            this.service.moveToLogin();
        }
        else {
            this.reset();
            this.getData();
        }
    };
    PaymentComponent.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.service.upload(file, function (data) {
                _this.onerow.icon = data;
            });
        }
    };
    PaymentComponent.prototype.cancel = function () {
        this.refresh();
    };
    PaymentComponent.prototype.onRowClick = function (item) {
        this.onerow = item;
        this.isHidden = false;
        this.isEdit = true;
    };
    PaymentComponent.prototype.update = function () {
        var _this = this;
        this.service.post(this.config.API_PAYMENT_EDIT, this.onerow, null, function (data) {
            _this.refresh();
        });
    };
    PaymentComponent.prototype.save = function () {
        var _this = this;
        this.service.post(this.config.API_PAYMENT_ADD_IN_APPS, this.onerow, null, function (data) {
            _this.refresh();
        });
    };
    PaymentComponent.prototype.delete = function () {
        var _this = this;
        this.service.get(this.config.API_PAYMENT_DELETE, this.onerow, function (data) {
            _this.refresh();
        });
    };
    PaymentComponent.prototype.getUrl = function (icon) {
        return this.service.getUrl(icon);
    };
    PaymentComponent.prototype.reset = function () {
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
    PaymentComponent.prototype.toggle = function () {
        this.isHidden = !this.isHidden;
        this.isEdit = false;
    };
    PaymentComponent = __decorate([
        core_1.Component({
            selector: 'app-payment',
            templateUrl: './payment.component.html'
        }),
        __metadata("design:paramtypes", [service_config_1.ConfigService,
            service_1.Service])
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/dashboard/payment/payment.component.js.map