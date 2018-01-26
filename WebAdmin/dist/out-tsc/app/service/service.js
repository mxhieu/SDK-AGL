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
var angular2_flash_messages_1 = require("angular2-flash-messages");
var http_1 = require("@angular/http");
var ng2_cookies_1 = require("ng2-cookies");
var routing_service_1 = require("./routing.service");
var service_config_1 = require("./service.config");
var Service = /** @class */ (function () {
    function Service(http, router, config, flash) {
        this.http = http;
        this.router = router;
        this.config = config;
        this.flash = flash;
        this.KEY_AUTH = 'fAuth';
        this.USER_TOKEN = 'ftoken';
        this.KEY_APP_ID = 'fAppId';
    }
    Service.prototype.makeHeaders = function () {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return headers;
    };
    Service.prototype.upload = function (file, callback) {
        var _this = this;
        var formData = new FormData();
        formData.append('uploadFile', file, file.name);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post('http://apitracking.bonanhem.com/v1/upload', formData)
            .subscribe(function (data) {
            try {
                var json = JSON.parse(data.text());
                if (json['success'] && json['success'] == 1)
                    callback(json['data']);
                else
                    _this.failure(json['msg']);
            }
            catch (err) {
                _this.failure(err);
            }
            console.log(data);
        }, function (err) {
            _this.failure(err);
        });
    };
    Service.prototype.get = function (url, dParams, callback) {
        var _this = this;
        var params = new http_1.URLSearchParams();
        params.append('authorization', this.getToken());
        if (dParams) {
            for (var key in dParams) {
                params.append(key, dParams[key]);
            }
        }
        var options = {
            search: params,
            headers: this.makeHeaders()
        };
        this.http.get(url, options)
            .subscribe(function (data) {
            try {
                var json = JSON.parse(data.text());
                if (json['success'] && (json['success'] == 1 || json['success'] == 100)) {
                    callback(json['data']);
                    _this.successful(json['msg'], json['success']);
                }
                else
                    _this.failure(json['msg']);
            }
            catch (err) {
                _this.failure(err);
            }
        }, function (err) {
            _this.failure(err);
        });
    };
    Service.prototype.post = function (url, body, dParams, callback) {
        var _this = this;
        var params = new http_1.URLSearchParams();
        params.append('authorization', this.getToken());
        if (dParams) {
            for (var key in dParams) {
                params.append(key, dParams[key]);
            }
        }
        var options = {
            search: params,
            headers: this.makeHeaders()
        };
        this.http.post(url, body, options)
            .subscribe(function (data) {
            try {
                var json = JSON.parse(data.text());
                if (json['success'] && (json['success'] == 1 || json['success'] == 100)) {
                    callback(json['data']);
                    _this.successful(json['msg'], json['success']);
                }
                else
                    _this.failure(json['msg']);
            }
            catch (err) {
                _this.failure(err);
            }
        }, function (err) {
            _this.failure(err);
        });
    };
    Service.prototype.failure = function (error) {
        this.flash.show('Request failed\n' + error, { cssClass: 'alert-warning' });
    };
    Service.prototype.successful = function (msg, code) {
        if (code == 1)
            this.flash.show(msg, { cssClass: 'alert-success' });
    };
    /* User */
    Service.prototype.getToken = function () {
        return ng2_cookies_1.Cookie.get(this.USER_TOKEN);
    };
    Service.prototype.setToken = function (token) {
        ng2_cookies_1.Cookie.set(this.USER_TOKEN, token);
    };
    Service.prototype.setAuth = function (auth) {
        ng2_cookies_1.Cookie.set(this.KEY_AUTH, auth);
    };
    Service.prototype.getAuth = function () {
        return JSON.parse(ng2_cookies_1.Cookie.get(this.KEY_AUTH));
    };
    Service.prototype.setAppId = function (appId) {
        ng2_cookies_1.Cookie.set(this.KEY_APP_ID, appId);
    };
    Service.prototype.getAppId = function () {
        return ng2_cookies_1.Cookie.get(this.KEY_APP_ID);
    };
    Service.prototype.logout = function () {
        ng2_cookies_1.Cookie.deleteAll();
        this.moveToLogin();
    };
    Service.prototype.isExpired = function () {
        if (ng2_cookies_1.Cookie.get(this.USER_TOKEN))
            return false;
        return true;
    };
    Service.prototype.login = function (params) {
        var _this = this;
        this.post(this.config.API_LOGIN, null, params, function (data) {
            _this.setToken(data.authorization);
            _this.setAuth(JSON.stringify(data));
            _this.moveToApps();
        });
    };
    Service.prototype.newApp = function (body, callback) {
        this.post(this.config.API_APP_NEW, JSON.stringify(body), null, function (data) {
            callback(data);
        });
    };
    Service.prototype.getApps = function (params, callback) {
        this.get(this.config.API_APP_GET, params, function (data) {
            callback(data);
        });
    };
    /* Router */
    Service.prototype.moveToLogin = function () {
        this.router.moveToLogin();
    };
    Service.prototype.moveToApps = function () {
        this.router.moveToApps();
    };
    Service.prototype.moveToAppDetail = function (appId) {
        this.setAppId(appId);
        this.router.moveToAppDetail();
    };
    Service.prototype.moveToForgotPassword = function () {
        this.router.moveToForgotPassword();
    };
    Service.prototype.getUrl = function (icon) {
        return 'http://apitracking.bonanhem.com/upload/image/' + icon;
    };
    Service.prototype.getSources = function (callback) {
        this.get(this.config.API_SOURCE_LIST, null, function (data) {
            callback(data);
        });
    };
    Service = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            routing_service_1.RoutingService,
            service_config_1.ConfigService,
            angular2_flash_messages_1.FlashMessagesService])
    ], Service);
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/service/service.js.map