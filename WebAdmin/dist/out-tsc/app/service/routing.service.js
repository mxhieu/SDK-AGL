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
var router_1 = require("@angular/router");
var service_private_1 = require("./service.private");
var RoutingService = /** @class */ (function () {
    function RoutingService(router) {
        this.router = router;
        this.BASE_URL = service_private_1.PrivateService.BASE_URL;
    }
    RoutingService.prototype.moveToLogin = function () {
        this.router.navigate(['/login']);
    };
    RoutingService.prototype.moveToApps = function () {
        this.router.navigate(['/apps']);
    };
    RoutingService.prototype.moveToForgotPassword = function () {
        this.router.navigate(['/forgot-password']);
    };
    RoutingService.prototype.moveToAppDetail = function () {
        this.router.navigate(['/apps/admin']);
    };
    RoutingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], RoutingService);
    return RoutingService;
}());
exports.RoutingService = RoutingService;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/service/routing.service.js.map