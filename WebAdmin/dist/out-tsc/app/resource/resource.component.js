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
var ResourceComponent = /** @class */ (function () {
    function ResourceComponent() {
    }
    ResourceComponent.prototype.ngOnInit = function () {
    };
    ResourceComponent = __decorate([
        core_1.Component({
            selector: 'app-resource',
            templateUrl: './resource.component.html',
            styleUrls: ['./resource.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ResourceComponent);
    return ResourceComponent;
}());
exports.ResourceComponent = ResourceComponent;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/resource/resource.component.js.map