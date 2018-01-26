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
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(service) {
        this.service = service;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    NotificationComponent.prototype.refresh = function () {
        if (this.service.isExpired()) {
            this.service.moveToLogin();
        }
        else {
            this.reset();
            this.getData();
        }
    };
    NotificationComponent.prototype.send = function () {
        this.refresh();
    };
    NotificationComponent.prototype.cancel = function () {
        this.refresh();
    };
    NotificationComponent.prototype.delete = function () {
    };
    NotificationComponent.prototype.reset = function () {
        this.isHidden = true;
        this.onerow = {
            'message': 'New message',
            'status': 0,
            'open': '0',
            'target': '1000',
            'app_id': '',
            'is_active': 1,
            'created_at': '0'
        };
        this.msgs = [];
        this.paging = { pg_page: 1, pg_size: 100 };
    };
    NotificationComponent.prototype.getData = function () {
        this.msgs.push({
            'message': 'New message',
            'status': 0,
            'open': '0',
            'target': '1000',
            'app_id': '',
            'is_active': 1,
            'created_at': '0'
        });
    };
    NotificationComponent.prototype.toggle = function () {
        this.isHidden = !this.isHidden;
    };
    NotificationComponent = __decorate([
        core_1.Component({
            selector: 'app-notification',
            templateUrl: './notification.component.html'
        }),
        __metadata("design:paramtypes", [service_1.Service])
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/dashboard/notification/notification.component.js.map