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
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(service) {
        this.service = service;
        this.disabled = false;
        this.status = { isopen: false };
        this.fullname = '';
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        if (!this.service.isExpired()) {
            this.fullname = this.service.getAuth().fullname;
        }
    };
    FullLayoutComponent.prototype.toggled = function (open) {
    };
    FullLayoutComponent.prototype.forgotPassword = function () {
        this.service.moveToForgotPassword();
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.logout = function () {
        this.service.logout();
    };
    FullLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './full-layout.component.html'
        }),
        __metadata("design:paramtypes", [service_1.Service])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());
exports.FullLayoutComponent = FullLayoutComponent;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/dashboard/full-layout.component.js.map