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
require("rxjs/Rx");
var service_1 = require("../../service/service");
var service_config_1 = require("../../service/service.config");
var EventComponent = /** @class */ (function () {
    function EventComponent(service, configService) {
        this.service = service;
        this.configService = configService;
        this.helpUpperCaseAfterCommas = function (str) {
            return str.replace(/,\s*([a-z])/g, function (d, e) { return ", " + e.toUpperCase(); });
        };
        this.state = 'listall';
        this.onerow = {};
        this.data = [];
        this.isnext = true;
        this.search = { field: 'name', term: '' };
        this.paging = { pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1 };
        this.header = [
            { id: 'user_id', name: 'UserId', is_search: 1 },
            { id: 'event_type', name: 'Type', is_search: 1 },
            { id: 'data', name: 'Data', is_search: 0, st_type: -1 },
            { id: 'created_at', name: 'Updated' }
        ];
        this.helpFetchData();
    }
    EventComponent.prototype.ngOnInit = function () { };
    /////////////
    // C R U D //
    /////////////
    // Create
    EventComponent.prototype.add = function () {
        this.onerow = { name: 'Application', platform: 'android', is_active: 1, is_instore: 1, created_at: 1 };
    };
    EventComponent.prototype.addSubmit = function () {
        var _this = this;
        if (this.onerow._id) {
            this.onerow.name = this.onerow.name + '_clone';
        }
        this.service.post(this.configService.API_APP_DELETE, this.onerow, null, function (data) {
            _this.helpFetchData();
            _this.reset();
        });
    };
    // Read 
    EventComponent.prototype.viewDetail = function (_onerow) {
        this.onerow = _onerow;
        this.onerow.isview = true;
    };
    EventComponent.prototype.viewRecycle = function () {
        this.state = 'recycle';
        this.paging.search_is_deleted = 1;
        this.helpFetchData();
    };
    EventComponent.prototype.viewDefault = function () {
        this.state = 'listall';
        this.paging.search_is_deleted = 0;
        this.helpFetchData();
    };
    EventComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.helpFetchData();
    };
    EventComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    EventComponent.prototype.sort = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol) {
                this.paging.st_type *= -1;
            }
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.helpFetchData();
        }
    };
    // Update
    EventComponent.prototype.edit = function (_onerow) {
        this.onerow = _onerow;
    };
    EventComponent.prototype.editSubmit = function () {
        var _this = this;
        this.service.post(this.configService.API_APP_EDIT, this.onerow, null, function (data) {
            _this.helpFetchData();
            _this.reset();
        });
    };
    EventComponent.prototype.restore = function (_onerow) {
        var _this = this;
        this.service.get(this.configService.api_app_restore, { '_id': _onerow._id }, function (data) { _this.helpFetchData(); });
    };
    // Delete  
    EventComponent.prototype.delete = function (_onerow) {
        var _this = this;
        this.service.get(this.configService.API_APP_DELETE, { '_id': _onerow._id }, function (data) { _this.helpFetchData(); });
    };
    EventComponent.prototype.reset = function () {
        this.onerow = {};
    };
    EventComponent.prototype.helpFetchData = function () {
        var _this = this;
        var key;
        if (this.search.term.length > 0) {
            key = 'search_' + this.search.field;
        }
        this.service.get(this.configService.api_tracking_get, {
            'search_app_id': this.service.getAppId(),
            'pg_page': this.paging.pg_page,
            'pg_size': this.paging.pg_size,
            'st_col': this.paging.st_col,
            'st_type': this.paging.st_type,
            key: this.search.term
        }, function (data) {
            _this.data = Array.isArray(data) ? data : [];
            _this.isnext = (_this.data.length >= _this.paging.pg_size) ? true : false;
        });
    };
    EventComponent.prototype.getTrackingStatus = function (type) {
        var res;
        if (type == '0') {
            res = 'Installs';
        }
        else if (type == '1') {
            res = 'Open';
        }
        else if (type == '2') {
            res = 'Login';
        }
        else if (type == '3') {
            res = 'Register';
        }
        else if (type == '4') {
            res = 'Quickplay';
        }
        else if (type == '5') {
            res = 'Payment';
        }
        else {
            res = 'Unknown';
        }
        return res;
    };
    EventComponent = __decorate([
        core_1.Component({
            templateUrl: 'event.component.html',
            styleUrls: ['event.component.scss']
        }),
        __metadata("design:paramtypes", [service_1.Service, service_config_1.ConfigService])
    ], EventComponent);
    return EventComponent;
}());
exports.EventComponent = EventComponent;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/dashboard/event/event.component.js.map