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
var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(conf, service) {
        this.conf = conf;
        this.service = service;
        this.state = 'listall';
        this.onerow = {};
        this.data = [];
        this.isnext = true;
        this.search = { field: 'name', term: '' };
        this.paging = { pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1 };
        this.header = [
            { id: '_id', name: 'User Id', is_search: 1, st_col: '_id', st_type: 1 },
            { id: 'username', name: 'User Name', is_search: 1, st_col: 'username', st_type: 1 },
            { id: 'email', name: 'Email', is_search: 1, st_col: 'email', st_type: 1 },
            { id: 'phone_number', name: 'Phone', is_search: 1, st_col: 'phone_number', st_type: 1 },
            { id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 }
        ];
        this.helpFetchData();
    }
    PlayerComponent.prototype.ngOnInit = function () { };
    // Read 
    PlayerComponent.prototype.viewDetail = function (_onerow) {
        this.onerow = _onerow;
        this.onerow.isview = true;
    };
    PlayerComponent.prototype.viewRecycle = function () {
        this.state = 'recycle';
        this.paging.search_is_deleted = 1;
        this.helpFetchData();
    };
    PlayerComponent.prototype.viewDefault = function () {
        this.state = 'listall';
        this.paging.search_is_deleted = 0;
        this.helpFetchData();
    };
    PlayerComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.helpFetchData();
    };
    PlayerComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    PlayerComponent.prototype.sort = function ($event) {
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
    PlayerComponent.prototype.helpReset = function () {
        this.onerow = {};
    };
    PlayerComponent.prototype.helpFetchData = function () {
        var _this = this;
        var key;
        if (this.search.term.length > 0) {
            key = 'search_' + this.search.field;
        }
        this.service.get(this.conf.api_player_get, {
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
    PlayerComponent = __decorate([
        core_1.Component({
            templateUrl: 'player.component.html'
        }),
        __metadata("design:paramtypes", [service_config_1.ConfigService, service_1.Service])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/dashboard/player/player.component.js.map