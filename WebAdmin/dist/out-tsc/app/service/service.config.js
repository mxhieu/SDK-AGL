"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_private_1 = require("./service.private");
var ng2_cookies_1 = require("ng2-cookies");
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.API_LOGIN = service_private_1.PrivateService.BASE_URL + 'authorize';
        this.API_APP_GET = service_private_1.PrivateService.BASE_URL + 'app';
        this.API_APP_NEW = service_private_1.PrivateService.BASE_URL + 'app/index';
        this.API_APP_EDIT = service_private_1.PrivateService.BASE_URL + 'app/edit';
        this.API_APP_DETAIL = service_private_1.PrivateService.BASE_URL + 'app/details';
        this.API_APP_KEY_RESET = service_private_1.PrivateService.BASE_URL + 'app/resetkey';
        this.API_APP_DELETE = service_private_1.PrivateService.BASE_URL + 'app/delete';
        this.api_suggestion_get = service_private_1.PrivateService.BASE_URL + 'suggestion';
        this.api_suggestion_search = service_private_1.PrivateService.BASE_URL + 'suggestion/search/';
        this.api_app_restore = service_private_1.PrivateService.BASE_URL + 'app/restore';
        this.api_app_get_recycle = service_private_1.PrivateService.BASE_URL + 'app/recycle';
        // Tracking
        this.api_tracking_get = service_private_1.PrivateService.BASE_URL + 'tracking';
        // Player
        this.api_player_get = service_private_1.PrivateService.BASE_URL + 'player';
        this.api_player_add = service_private_1.PrivateService.BASE_URL + 'player';
        this.api_player_edit = service_private_1.PrivateService.BASE_URL + 'player/edit';
        this.api_player_delete = service_private_1.PrivateService.BASE_URL + 'player/delete';
        this.api_player_restore = service_private_1.PrivateService.BASE_URL + 'player/restore';
        // User
        this.api_user_register = service_private_1.PrivateService.BASE_URL + "user";
        // Campaign
        this.api_campaign_get = service_private_1.PrivateService.BASE_URL + 'campaign';
        this.api_campaign_del = service_private_1.PrivateService.BASE_URL + 'campaign/delete';
        this.api_campaign_add = service_private_1.PrivateService.BASE_URL + 'campaign/index';
        this.api_campaign_edit = service_private_1.PrivateService.BASE_URL + 'campaign/edit';
        this.api_campaign_restore = service_private_1.PrivateService.BASE_URL + 'campaign/restore';
        this.api_campaign_get_recycle = service_private_1.PrivateService.BASE_URL + 'campaign/recycle';
        this.api_upload_image = service_private_1.PrivateService.BASE_URL + 'upload';
        this.api_image_directory = service_private_1.PrivateService.BASE_URL + 'upload/image/';
        // Analytics
        this.API_APP_OVERVIEW = service_private_1.PrivateService.BASE_URL + 'app/overview';
        // Router
        this.LINK_TO_APPS = '/apps';
        this.LINK_TO_LOGIN = '/login';
        // User privacy
        this.USER_TOKEN = 'ftoken';
        this.USER_FULLNAME = 'fname';
        // App config
        this.APP_INFO = 'fApp';
        this.APP_ID = 'fAppId';
        // Payment
        this.API_PAYMENT_GET_ITEMS = service_private_1.PrivateService.BASE_URL + 'inapp-item';
        this.API_PAYMENT_ADD_IN_APPS = service_private_1.PrivateService.BASE_URL + 'inapp-item';
        this.API_PAYMENT_EDIT = service_private_1.PrivateService.BASE_URL + 'inapp-item/edit';
        this.API_PAYMENT_DELETE = service_private_1.PrivateService.BASE_URL + 'inapp-item/delete';
        // Card
        this.API_PAYMENT_CARD_EDIT = service_private_1.PrivateService.BASE_URL + 'card-item/edit';
        this.API_PAYMENT_GET_CARD_ITEMS = service_private_1.PrivateService.BASE_URL + 'card-item';
        this.API_PAYMENT_ADD_CARDS = service_private_1.PrivateService.BASE_URL + 'card-item';
        this.API_PAYMENT_CARD_ITEMS_DELETE = service_private_1.PrivateService.BASE_URL + 'card-item/delete';
        // Report
        this.API_REPORT_ARM = service_private_1.PrivateService.BASE_URL + 'report-arm';
        this.API_REPORT_ARM_PD = service_private_1.PrivateService.BASE_URL + 'report-armPd';
        this.API_SOURCE_LIST = service_private_1.PrivateService.BASE_URL + 'listsource';
        this.API_REPORT_ROI = service_private_1.PrivateService.BASE_URL + 'report-roi';
        this.API_REPORT_ROI_PD = service_private_1.PrivateService.BASE_URL + 'report-roiPd';
        this.API_REPORT_GAME = service_private_1.PrivateService.BASE_URL + 'report-roiPd';
        this.API_REPORT_PRODUCT = service_private_1.PrivateService.BASE_URL + 'report-roiPd';
    }
    ConfigService.prototype.setFullname = function (fullname) {
        ng2_cookies_1.Cookie.set(this.USER_FULLNAME, fullname);
    };
    ConfigService.prototype.setAppInfo = function (info) {
        ng2_cookies_1.Cookie.set(this.APP_INFO, JSON.stringify(info));
    };
    ConfigService.prototype.setAppId = function (id) {
        ng2_cookies_1.Cookie.set(this.APP_ID, id);
    };
    ConfigService.prototype.getAppId = function () {
        return ng2_cookies_1.Cookie.get(this.APP_ID);
    };
    ConfigService.prototype.getToken = function () {
        return ng2_cookies_1.Cookie.get(this.USER_TOKEN);
    };
    ConfigService.prototype.getAppInfo = function () {
        return JSON.parse(ng2_cookies_1.Cookie.get(this.APP_INFO));
    };
    ConfigService.prototype.getFullName = function () {
        var name = ng2_cookies_1.Cookie.get(this.USER_FULLNAME);
        if (!name)
            name = 'User';
        return name;
    };
    ConfigService = __decorate([
        core_1.Injectable()
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/service/service.config.js.map