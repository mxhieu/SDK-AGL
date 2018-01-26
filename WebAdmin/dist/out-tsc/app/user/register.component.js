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
var service_config_1 = require("../service/service.config");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service, config) {
        this.service = service;
        this.config = config;
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (!this.service.isExpired())
            this.service.moveToApps();
    };
    RegisterComponent.prototype.register = function (event) {
        var _this = this;
        this.service.post(this.config.api_user_register, {
            'username': this.model.username,
            'password': this.model.password,
            'fullname': this.model.username,
            'email': this.model.email
        }, null, function (data) {
            if (data.success == 1) {
                _this.service.moveToLogin();
            }
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            templateUrl: 'register.component.html'
        }),
        __metadata("design:paramtypes", [service_1.Service, service_config_1.ConfigService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/user/register.component.js.map