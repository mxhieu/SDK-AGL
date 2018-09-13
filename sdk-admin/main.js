(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module~rbac-rbac-module",
		"dashboard-dashboard-module"
	],
	"./rbac/rbac.module": [
		"./src/app/rbac/rbac.module.ts",
		"dashboard-dashboard-module~rbac-rbac-module",
		"rbac-rbac-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'body',
            template: '<flash-messages></flash-messages><router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var _shared_nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/nav-dropdown.directive */ "./src/app/shared/nav-dropdown.directive.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var _shared_sidebar_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/sidebar.directive */ "./src/app/shared/sidebar.directive.ts");
/* harmony import */ var _shared_aside_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/aside.directive */ "./src/app/shared/aside.directive.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _service_service_private__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/service.private */ "./src/app/service/service.private.ts");
/* harmony import */ var _service_service_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/service.config */ "./src/app/service/service.config.ts");
/* harmony import */ var _service_routing_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/routing.service */ "./src/app/service/routing.service.ts");
/* harmony import */ var _dashboard_full_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/full-layout.component */ "./src/app/dashboard/full-layout.component.ts");
/* harmony import */ var _rbac_rbac_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rbac/rbac-layout.component */ "./src/app/rbac/rbac-layout.component.ts");
/* harmony import */ var _user_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/login.component */ "./src/app/user/login.component.ts");
/* harmony import */ var _shared_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/footer.component */ "./src/app/shared/footer.component.ts");
/* harmony import */ var _shared_404_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/404.component */ "./src/app/shared/404.component.ts");
/* harmony import */ var _user_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/register.component */ "./src/app/user/register.component.ts");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _document_documents_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./document/documents.component */ "./src/app/document/documents.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/resource/resource.component.ts");
/* harmony import */ var _user_forgotpassword_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/forgotpassword.component */ "./src/app/user/forgotpassword.component.ts");
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./group/group.component */ "./src/app/group/group.component.ts");
/* harmony import */ var _service_shared_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./service/shared.module */ "./src/app/service/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Ngx Module




// Routing Module




// Layouts
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
                _service_shared_module__WEBPACK_IMPORTED_MODULE_32__["SharedModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_full_layout_component__WEBPACK_IMPORTED_MODULE_17__["FullLayoutComponent"],
                _shared_nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__["NAV_DROPDOWN_DIRECTIVES"],
                _shared_sidebar_directive__WEBPACK_IMPORTED_MODULE_11__["SIDEBAR_TOGGLE_DIRECTIVES"],
                _shared_aside_directive__WEBPACK_IMPORTED_MODULE_12__["AsideToggleDirective"],
                _user_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _shared_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                _shared_404_component__WEBPACK_IMPORTED_MODULE_21__["p404Component"],
                _user_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
                _shared_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_24__["ContactComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_25__["BlogComponent"],
                _document_documents_component__WEBPACK_IMPORTED_MODULE_26__["DocumentsComponent"],
                _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_27__["PrivacyComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_28__["HelpComponent"],
                _resource_resource_component__WEBPACK_IMPORTED_MODULE_29__["ResourceComponent"],
                _user_forgotpassword_component__WEBPACK_IMPORTED_MODULE_30__["ForgotPasswordComponent"],
                _group_group_component__WEBPACK_IMPORTED_MODULE_31__["GroupComponent"],
                _rbac_rbac_layout_component__WEBPACK_IMPORTED_MODULE_18__["RbacLayoutComponent"]
            ],
            providers: [
                _service_service_config__WEBPACK_IMPORTED_MODULE_15__["ConfigService"],
                _service_routing_service__WEBPACK_IMPORTED_MODULE_16__["RoutingService"],
                _service_service_private__WEBPACK_IMPORTED_MODULE_14__["PrivateService"],
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/full-layout.component */ "./src/app/dashboard/full-layout.component.ts");
/* harmony import */ var _rbac_rbac_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rbac/rbac-layout.component */ "./src/app/rbac/rbac-layout.component.ts");
/* harmony import */ var _user_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/login.component */ "./src/app/user/login.component.ts");
/* harmony import */ var _user_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/register.component */ "./src/app/user/register.component.ts");
/* harmony import */ var _shared_404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/404.component */ "./src/app/shared/404.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _document_documents_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./document/documents.component */ "./src/app/document/documents.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/resource/resource.component.ts");
/* harmony import */ var _user_forgotpassword_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/forgotpassword.component */ "./src/app/user/forgotpassword.component.ts");
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./group/group.component */ "./src/app/group/group.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: 'login',
        component: _user_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'register',
        component: _user_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: 'groups',
        component: _group_group_component__WEBPACK_IMPORTED_MODULE_14__["GroupComponent"]
    },
    {
        path: 'apps',
        component: _dashboard_full_layout_component__WEBPACK_IMPORTED_MODULE_2__["FullLayoutComponent"],
        children: [
            {
                path: 'admin',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }
        ]
    },
    {
        path: 'settings',
        component: _rbac_rbac_layout_component__WEBPACK_IMPORTED_MODULE_3__["RbacLayoutComponent"],
        children: [
            {
                path: 'admin',
                loadChildren: './rbac/rbac.module#RbacModule'
            }
        ]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    },
    {
        path: 'blogs',
        component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"]
    },
    {
        path: 'document',
        component: _document_documents_component__WEBPACK_IMPORTED_MODULE_9__["DocumentsComponent"]
    },
    {
        path: 'privacy',
        component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_10__["PrivacyComponent"]
    },
    {
        path: 'help',
        component: _help_help_component__WEBPACK_IMPORTED_MODULE_11__["HelpComponent"]
    },
    {
        path: 'resources',
        component: _resource_resource_component__WEBPACK_IMPORTED_MODULE_12__["ResourceComponent"]
    },
    {
        path: 'forgot-password',
        component: _user_forgotpassword_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _shared_404_component__WEBPACK_IMPORTED_MODULE_6__["p404Component"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            \n                <div class=\"clearfix\">\n                    <h1 class=\"float-left display-3 mr-2\" style=\"text-align: center;\">COMING SOON</h1>\n                    <h4 class=\"pt-1\" style=\"text-align: center;\">This is blogs page of CoreSDK</h4>\n                </div>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/blog/blog.component.scss":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> Contact </h1>\n<div class=\"info\">\n    <a target=\"_blank\">\n        <p> Made with <i class=\"fa fa-heart\"></i> by CoreSDK Team </p>\n    </a>\n</div>\n<form>\n    <h1>Should you have any questions, please do not hesitate to contact me :</h1>\n    <div class=\"contentform\">\n        <div id=\"sendmessage\"> Your message has been sent successfully. Thank you. </div>\n        <div class=\"leftcontact\">\n            <div class=\"form-group\">\n                <p>Surname<span>*</span></p>\n                <span class=\"icon-case\"><i class=\"fa fa-male\"></i></span>\n                <input type=\"text\" name=\"nom\" id=\"nom\" data-rule=\"required\" data-msg=\"Vérifiez votre saisie sur les champs : Le champ 'Nom' doit être renseigné.\" />\n                <div class=\"validation\"></div>\n            </div>\n            <div class=\"form-group\">\n                <p>Name <span>*</span></p>\n                <span class=\"icon-case\"><i class=\"fa fa-user\"></i></span>\n                <input type=\"text\" name=\"prenom\" id=\"prenom\" data-rule=\"required\" data-msg=\"Vérifiez votre saisie sur les champs : Le champ 'Prénom' doit être renseigné.\" />\n                <div class=\"validation\"></div>\n            </div>\n            <div class=\"form-group\">\n                <p>E-mail <span>*</span></p>\n                <span class=\"icon-case\"><i class=\"fa fa-envelope-o\"></i></span>\n                <input type=\"email\" name=\"email\" id=\"email\" data-rule=\"email\" data-msg=\"Vérifiez votre saisie sur les champs : Le champ 'E-mail' est obligatoire.\" />\n                <div class=\"validation\"></div>\n            </div>\n            <div class=\"form-group\">\n                <p>Company <span>*</span></p>\n                <span class=\"icon-case\"><i class=\"fa fa-home\"></i></span>\n                <input type=\"text\" name=\"society\" id=\"society\" data-rule=\"required\" data-msg=\"Vérifiez votre saisie sur les champs : Le champ 'Société' doit être renseigné.\" />\n                <div class=\"validation\"></div>\n            </div>\n            <div class=\"form-group\">\n                <p>Company Address <span>*</span></p>\n                <span class=\"icon-case\"><i class=\"fa fa-location-arrow\"></i></span>\n                <input type=\"text\" name=\"adresse\" id=\"adresse\" data-rule=\"required\" data-msg=\"Vérifiez votre saisie sur les champs : Le champ 'Adresse' doit être renseigné.\" />\n                <div class=\"validation\"></div>\n            </div>\n            <div class=\"form-group\">\n                <p>Postcode <span>*</span></p>\n                <span class=\"icon-case\"><i class=\"fa fa-map-marker\"></i></span>\n                <input type=\"text\" name=\"postal\" id=\"postal\" data-rule=\"required\" data-msg=\"Vérifiez votre saisie sur les champs : Le champ 'Code postal' doit être renseigné.\" />\n                <div class=\"validation\"></div>\n            </div>\n        </div>\n        <div class=\"rightcontact\">\n            <div class=\"form-group\">\n                <p>City <span>*</span></p>\n                <span class=\"icon-case\"><i class=\"fa fa-building-o\"></i></span>\n                <input type=\"text\" name=\"ville\" id=\"ville\" data-rule=\"required\" data-msg=\"Vérifiez votre saisie sur les champs : Le champ 'Ville' doit être renseigné.\" />\n                <div class=\"validation\"></div>\n            </div>\n            <div class=\"form-group\">\n                <p>Phone number <span>*</span></p>\n                <span class=\"icon-case\"><i class=\"fa fa-phone\"></i></span>\n                <input type=\"text\" name=\"phone\" id=\"phone\" data-rule=\"maxlen:10\" data-msg=\"Vérifiez votre saisie sur les champs : Le champ 'Téléphone' doit être renseigné. Minimum 10 chiffres\" />\n                <div class=\"validation\"></div>\n            </div>\n            <div class=\"form-group\">\n                <p>Function <span>*</span></p>\n                <span class=\"icon-case\"><i class=\"fa fa-info\"></i></span>\n                <input type=\"text\" name=\"fonction\" id=\"fonction\" data-rule=\"required\" data-msg=\"Vérifiez votre saisie sur les champs : Le champ 'Fonction' doit être renseigné.\" />\n                <div class=\"validation\"></div>\n            </div>\n            <div class=\"form-group\">\n                <p>Subject <span>*</span></p>\n                <span class=\"icon-case\"><i class=\"fa fa-comment-o\"></i></span>\n                <input type=\"text\" name=\"sujet\" id=\"sujet\" data-rule=\"required\" data-msg=\"Vérifiez votre saisie sur les champs : Le champ 'Sujet' doit être renseigné.\" />\n                <div class=\"validation\"></div>\n            </div>\n            <div class=\"form-group\">\n                <p>Message <span>*</span></p>\n                <span class=\"icon-case\"><i class=\"fa fa-comments-o\"></i></span>\n                <textarea name=\"message\" rows=\"14\" data-rule=\"required\" data-msg=\"Vérifiez votre saisie sur les champs : Le champ 'Message' doit être renseigné.\"></textarea>\n                <div class=\"validation\"></div>\n            </div>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"bouton-contact\" (click)=(contact())>Send</button>\n</form>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: auto;\n  background: #eaeaea;\n  font-family: 'Open Sans', sans-serif; }\n\n.info p {\n  text-align: center;\n  color: #999;\n  text-transform: none;\n  font-weight: 600;\n  font-size: 15px;\n  margin-top: 2px; }\n\n.info i {\n  color: #F6AA93; }\n\nform h1 {\n  font-size: 18px;\n  background: #F6AA93 none repeat scroll 0% 0%;\n  color: white;\n  padding: 22px 25px;\n  border-radius: 5px 5px 0px 0px;\n  margin: auto;\n  text-shadow: none;\n  text-align: left; }\n\nform {\n  border-radius: 5px;\n  max-width: 700px;\n  width: 100%;\n  margin: 5% auto;\n  background-color: #FFFFFF;\n  overflow: hidden; }\n\np span {\n  color: #F00; }\n\np {\n  margin: 0px;\n  font-weight: 500;\n  line-height: 2;\n  color: #333; }\n\nh1 {\n  text-align: center;\n  color: #666;\n  text-shadow: 1px 1px 0px #FFF;\n  margin: 50px 0px 0px 0px; }\n\ninput {\n  border-radius: 0px 5px 5px 0px;\n  border: 1px solid #eee;\n  margin-bottom: 15px;\n  width: 75%;\n  height: 40px;\n  float: left;\n  padding: 0px 15px; }\n\na {\n  text-decoration: inherit; }\n\ntextarea {\n  border-radius: 0px 5px 5px 0px;\n  border: 1px solid #EEE;\n  margin: 0;\n  width: 75%;\n  height: 130px;\n  float: left;\n  padding: 0px 15px; }\n\n.form-group {\n  overflow: hidden;\n  clear: both; }\n\n.icon-case {\n  width: 35px;\n  float: left;\n  border-radius: 5px 0px 0px 5px;\n  background: #eeeeee;\n  height: 42px;\n  position: relative;\n  text-align: center;\n  line-height: 40px; }\n\ni {\n  color: #555; }\n\n.contentform {\n  padding: 40px 30px; }\n\n.bouton-contact {\n  background-color: #81BDA4;\n  color: #FFF;\n  text-align: center;\n  width: 100%;\n  border: 0;\n  padding: 17px 25px;\n  border-radius: 0px 0px 5px 5px;\n  cursor: pointer;\n  margin-top: 40px;\n  font-size: 18px; }\n\n.leftcontact {\n  width: 49.5%;\n  float: left;\n  border-right: 1px dotted #CCC;\n  box-sizing: border-box;\n  padding: 0px 15px 0px 0px; }\n\n.rightcontact {\n  width: 49.5%;\n  float: right;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 15px; }\n\n.validation {\n  display: none;\n  margin: 0 0 10px;\n  font-weight: 400;\n  font-size: 13px;\n  color: #DE5959; }\n\n#sendmessage {\n  border: 1px solid #fff;\n  display: none;\n  text-align: center;\n  margin: 10px 0;\n  font-weight: 600;\n  margin-bottom: 30px;\n  background-color: #EBF6E0;\n  color: #5F9025;\n  border: 1px solid #B3DC82;\n  padding: 13px 40px 13px 18px;\n  border-radius: 3px;\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.03); }\n\n#sendmessage.show,\n.show {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.contact = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/full-layout.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/full-layout.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"app-body\">\n    <div class=\"sidebar\">\n        <nav class=\"sidebar-nav\">\n            <ul class=\"nav\">\n                <li class=\"nav-title\"> Report </li>\n                <div *ngIf=\"service.checkpermission('report-arm')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/report-arm']\">\n                            <i class=\"icon-graph\"></i> \n                            ARM Report\n                        </a>\n                    </li>\n                </div>\n                \n                <div *ngIf=\"service.checkpermission('report-armPd')\">    \n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/report-armpd']\">\n                            <i class=\"icon-chart\"></i> \n                            ARM PD Report\n                        </a>\n                    </li>\n                </div>\n\n                <div *ngIf=\"service.checkpermission('report-roi')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/report-roi']\">\n                            <i class=\"icon-pie-chart\"></i> \n                            ROI Report\n                        </a>\n                    </li>\n                </div>\n\n                <div *ngIf=\"service.checkpermission('report-roipd')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/report-roipd']\">\n                            <i class=\"icon-chart\"></i> \n                            ROI PD Report\n                        </a>\n                    </li>\n                </div>\n\n                <div *ngIf=\"service.checkpermission('report-cohort')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/report-cohort']\">\n                            <i class=\"icon-pie-chart\"></i> \n                            Cohort\n                        </a>\n                    </li>\n                </div>\n\n                <div *ngIf=\"service.checkpermission('report-kpi')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/report-kpi']\">\n                            <i class=\"icon-pie-chart\"></i> \n                            KPI Report\n                        </a>\n                    </li>\n                </div>\n\n                <div *ngIf=\"service.checkpermission('report-ads')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/report-ads']\">\n                            <i class=\"icon-ghost\"></i> \n                            Ads Report\n                        </a>\n                    </li>\n                </div>\n                <div >\n                   <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/report-cards']\">\n                            <i class=\"icon-wallet\"></i> \n                            Card Report\n                        </a>\n                    </li>\n                </div>\n                 <div *ngIf=\"service.checkpermission('iap-transaction')\">\n                   <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/transaction']\">\n                            <i class=\"icon-wallet\"></i> \n                            IAP Transaction\n                        </a>\n                    </li>\n                </div>\n                <li class=\"divider\"></li>\n                <li class=\"nav-title\"> Admin </li>\n                <div *ngIf=\"service.checkpermission('campaign')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/campaign']\">\n                            <i class=\"icon-layers\"></i> \n                            Campaign\n                        </a>\n                    </li>\n                </div>\n                <div *ngIf=\"service.checkpermission('campaign-ad')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/report-ads-performance']\">\n                            <i class=\"icon-ghost\"></i> \n                            Ads\n                        </a>\n                    </li>\n                </div>\n                <div *ngIf=\"service.checkpermission('listsource')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/sourceslist']\">\n                            <i class=\"icon-folder-alt\"></i> \n                            Source\n                        </a>\n                    </li>\n                </div>\n\n                <div>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/metric']\">\n                            <i class=\"icon-key\"></i> \n                            Metric\n                        </a>\n                    </li>\n                </div>\n                <li class=\"divider\"></li>\n                <li class=\"nav-title\"> Configuration </li>\n                <div *ngIf=\"service.checkpermission('app')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/setting']\">\n                            <i class=\"icon-settings\"></i> \n                            Setting\n                        </a>\n                    </li>\n                </div>\n                <div *ngIf=\"service.checkpermission('player')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/player']\">\n                            <i class=\"icon-user\"></i> \n                            Player\n                        </a>\n                    </li>\n                </div>\n                <div *ngIf=\"service.checkpermission('inapp-item')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/in-app']\">\n                            <i class=\"icon-basket-loaded\"></i> \n                            In-App\n                        </a>\n                    </li>\n                </div>\n                <div *ngIf=\"service.checkpermission('card-item')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/telco']\">\n                            <i class=\"icon-credit-card\"></i> \n                            Telco\n                        </a>\n                    </li>\n                </div>\n                <li class=\"divider\"></li>\n                <li class=\"nav-title\"> Grow </li>\n                <div *ngIf=\"service.checkpermission('notification')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/apps/admin/notification']\">\n                            <i class=\"icon-fire\"></i> \n                            Push notification\n                        </a>\n                    </li>\n                </div>\n            </ul>\n        </nav>\n    </div>\n    <main class=\"main\">\n        <div class=\"container-fluid\">\n            <router-outlet></router-outlet>\n        </div>\n    </main>\n</div>\n<footer class=\"app-footer\">\n    &copy; CoreSDK 2018 <span class=\"float-right\">Powered by <a href=\"http://ecdc.vn/\">CoreSDK</a> </span>\n</footer>"

/***/ }),

/***/ "./src/app/dashboard/full-layout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/full-layout.component.ts ***!
  \****************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(service) {
        this.service = service;
        this.disabled = false;
        this.status = { isopen: false };
        this.fullname = '';
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        if (!this.service.isExpired()) {
            this.fullname = this.service.getFullName();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./full-layout.component.html */ "./src/app/dashboard/full-layout.component.html")
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/document/documents.component.html":
/*!***************************************************!*\
  !*** ./src/app/document/documents.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n    <div class=\"container\">\n    \t<br/>\n    \t<h1 class=\"display-3\" align=\"center\">DOCUMENT</h1>\n    \t<p class=\"lead\" align=\"center\">\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.\n        </p>\n        <div class=\"row justify-content-center\">\n            \n            <img src=\"assets/img/logo_full.png\" style=\"height: 128px\">\n            \n            <ul class=\"list-unstyled\" style=\"min-height: 1280px;\">\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/document/documents.component.scss":
/*!***************************************************!*\
  !*** ./src/app/document/documents.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/document/documents.component.ts":
/*!*************************************************!*\
  !*** ./src/app/document/documents.component.ts ***!
  \*************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
    }
    DocumentsComponent.prototype.ngOnInit = function () {
    };
    DocumentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documents',
            template: __webpack_require__(/*! ./documents.component.html */ "./src/app/document/documents.component.html"),
            styles: [__webpack_require__(/*! ./documents.component.scss */ "./src/app/document/documents.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "./src/app/group/group.component.html":
/*!********************************************!*\
  !*** ./src/app/group/group.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"app-body\">\n<div class=\"rx-floathide-form rx-isview\" [hidden]=\"isGroupHidden\">\n    <div class=\"col-lg-12 col-md-12\" style=\"margin-top: 1.25rem; width:100%;\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h5 class=\"card-title\" [hidden]=\"isGroupEdit\">Group</h5>\n                <h5 class=\"card-title\" [hidden]=\"!isGroupEdit\">Edit</h5>\n            </div>\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-lg-4\" [hidden]=\"!isGroupEdit\">\n                        <label class=\"form-control-label\">\n                        Group Id</label>\n                        <br/>\n                        <input class=\"form-control\" type=\"text\" disabled value=\"{{onerow._id}}\" readonly=\"readonly\">\n                    </div>\n                    <div class=\"col-md-4 col-lg-4\">\n                        <label class=\"form-control-label\">Name</label>\n                        <input class=\"form-control\" name=\"name\" placeholder=\"App Name ...\" type=\"text\" [(ngModel)]=\"onerow.name\">\n                    </div>\n                    <div class=\"col-md-4 col-lg-4\">\n                        <label class=\"col-form-label\">Group Icon</label>\n                        <input type=\"file\" (change)=\"fileChanged($event)\" placeholder=\"Upload file\" accept=\"*.*\">\n                        <img [src]=\"getUrl(onerow.icon)\" (error)=\"onImageLoadedError($event)\" class=\"tIcon\" />\n                    </div>\n                </div>\n                <br/>\n                <div class=\"row\">\n                    <div class=\"col-lg-2 col-md-2\">\n                        <label class=\"col-form-label-none\">Active</label>\n                        <label class=\"switch switch-text switch-pill switch-info\">\n                            <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"onerow.is_active\">\n                            <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                            <span class=\"switch-handle\"></span>\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-primary btn-sm\" type=\"submit\" (click)=\"newGroup()\" [hidden]=\"isGroupEdit\">\n                <i class=\"icon-plus\"></i> Create\n                </button>\n                <button class=\"btn btn-primary btn-sm\" type=\"submit\" (click)=\"updateGroup()\" [hidden]=\"!isGroupEdit\">\n                <i class=\"fa fa-pencil-square-o\"></i> Update\n                </button>\n                <button class=\"btn btn-danger btn-sm\" type=\"reset\" (click)=\"refresh()\"><i class=\"fa fa-ban\"></i> Cancel</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"rx-floathide-form rx-isview\" [hidden]=\"isAppHidden\">\n    <div class=\"col-lg-12 col-md-12\" style=\"margin-top: 1.25rem; width:100%;\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h5 class=\"card-title\">New app</h5>\n            </div>\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 col-lg-3\">\n                        <label class=\"form-control-label\">App Name</label>\n                        <input class=\"form-control\" name=\"name\" placeholder=\"App Name ...\" type=\"text\" [(ngModel)]=\"app.name\">\n                    </div>\n                    <div class=\"col-md-3 col-lg-3\">\n                        <label class=\"form-control-label\">Description</label>\n                        <input class=\"form-control\" name=\"desc\" placeholder=\"Description ...\" type=\"text\" [(ngModel)]=\"app.desc\">\n                    </div>\n                    <div class=\"col-md-3 col-lg-3\">\n                        <label class=\"form-control-label\">\n                        Package name/ Bundle Id</label>\n                        <br/>\n                        <input class=\"form-control\" name=\"bundle_id\" placeholder=\"Bundle Id ...\" type=\"text\" [(ngModel)]=\"app.bundle_id\">\n                    </div>\n                    <div class=\"col-md-3 col-lg-3\">\n                        <label class=\"form-control-label\">Store Url</label>\n                        <input class=\"form-control\" name=\"storeUrl\" placeholder=\"Store Url ...\" type=\"text\" [(ngModel)]=\"app.storeUrl\">\n                    </div>\n                </div>\n                <br/>\n                <div class=\"row\">\n                    <div class=\"col-md-3 col-lg-3\">\n                        <label class=\"form-control-label\">\n                        Group Version</label>\n                        <br/>\n                        <input class=\"form-control\" name=\"group_version\" placeholder=\"Group Version\" type=\"text\" [(ngModel)]=\"app.group_version\">\n                    </div>\n                    <div class=\"col-md-3 col-lg-3\">\n                        <label class=\"form-control-label\">\n                        Group Id</label>\n                        <br/>\n                        <input class=\"form-control\" type=\"text\" disabled value=\"{{onerow._id}}\" readonly=\"readonly\">\n                    </div>\n                    <div class=\"col-md-3 col-lg-3\">\n                        <label class=\"form-control-label\">\n                        Group Name</label>\n                        <br/>\n                        <input class=\"form-control\" type=\"text\" disabled value=\"{{onerow.name}}\" readonly=\"readonly\">\n                    </div>\n                    <div class=\"col-md-3 col-lg-3\">\n                        <label class=\"form-control-label\">\n                        Platform</label>\n                        <br/>\n                        <input class=\"tpointer\" type=\"radio\" name=\"platform\" value=\"ios\" [(ngModel)]=\"app.platform\"> <i class=\"fa fa-apple fa-lg m-t-2 rx-apple\"></i> iOS\n                        <input class=\"tpointer\" type=\"radio\" name=\"platform\" value=\"android\" [(ngModel)]=\"app.platform\"> <i class=\"fa fa-android fa-lg m-t-2 rx-android\"></i> Android\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=(newApp())>\n                <i class=\"fa fa-dot-circle-o\"></i> Save </button>\n                <button class=\"btn btn-sm btn-danger\" type=\"reset\" (click)=(refresh())><i class=\"fa fa-ban\"></i> Cancel</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"col-lg-1 col-md-1\">\n</div>\n<div class=\"col-lg-10 col-md-10\" style=\"margin-top: 1.25rem; width:100%;\">\n    <div class=\"card\">\n        <div class=\"card-block\">\n            <div class=\"card-tools\">\n                <select class=\"sel-search\" [(ngModel)]=\"search.field\">\n                    <option *ngFor=\"let perheader of header\" [hidden]=\"!perheader.is_search\" value=\"{{perheader.id}}\">{{perheader.name}}</option>\n                </select><i class=\"icon-arrow-down sel-ico\"></i>\n                <input type=\"text\" class=\"rx-cur input-search\" [(ngModel)]=\"search.term\">\n                <button class=\"btn btn-sm btn-default btn-search\" (click)=\"jumpPage(1)\"><i class=\"icon-magnifier\"></i></button>\n                <button class=\"btn btn-sm btn-primary\" (click)=(toggleGroup())>\n                <i class=\"icon-plus\"></i> Group\n                </button>\n            </div>\n            <div style=\"overflow-x: auto; width: 100%; box-sizing: border-box;\">\n                <table class=\"table table-hover table-outline mb-0 table-striped\" style=\"max-height: 1280px;\">\n                    <thead class=\"thead-default\">\n                        <tr>\n                            <th *ngFor=\"let perheader of header\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}} text-center\" style=\"vertical-align:middle;\">\n                                {{perheader.name}}\n                            </th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let g of groups\" (click)=(onItemClicked(g)) class=\"tpointer\">\n                            <td class=\"text-center\">\n                                <div class=\"avatar\">\n                                    <img [src]=\"getUrl(g.icon)\" (error)=\"onImageLoadedError($event)\" style=\"width: 32px; height: 32px;\">\n                                </div>\n                                <span class=\"badge badge-pill badge-danger\">{{g.settings.length}}</span>\n                            </td>\n                            <td align=\"center\" class=\"text-center\">\n                                <strong>{{g.name}}</strong>\n                            </td>\n                            <td align=\"center\" class=\"text-center\">\n                                <span class=\"tag tag-success\" [hidden]=\"!(g.is_active || 0)\">Active</span>\n                                <span class=\"tag tag-default\" [hidden]=\"(g.is_active || 0)\">Inactive</span>\n                                <span class=\"tag tag-danger\" [hidden]=\"!(g.is_deleted || 0)\">Deleted</span>\n                            </td>\n                            <td align=\"center\" class=\"text-center\">\n                                <div>{{g.updated_at * 1000 | date:'dd/MM/yyyy'}}</div>\n                            </td>\n                            <td align=\"center\" class=\"text-center\">\n                                <div>{{g.created_at * 1000 | date:'dd/MM/yyyy'}}</div>\n                            </td>\n                            <td align=\"center\" class=\"text-center\">\n                                <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"editGroup($event, g)\">\n                                <i class=\"fa fa-pencil-square-o\"></i>\n                                </button>\n                                <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteGroup($event, g._id)\">\n                                <i class=\"fa fa-trash-o\"></i>\n                                </button>\n                                <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"toggleApp($event , g)\">\n                                <i class=\"icon-plus\"></i> app\n                                </button>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"100%\" class=\"rx-pagin\">\n                                <button class=\"rx-back\" [disabled]=\"paging.pg_page <= 1\" (click)=\"jumpPage(paging.pg_page - 1)\">\n                                <</button>\n                                <input type=\"number\" class=\"rx-cur\" [(ngModel)]=\"paging.pg_page\">\n                                <button class=\"rx-next\" [disabled]=\"!isnext\" (click)=\"jumpPage(paging.pg_page + 1)\">></button>\n                                <span class=\"rx-jump\" (click)=\"jumpPage(paging.pg_page)\"><i class=\"icon-rocket\"></i></span>\n                                <select type=\"number\" class=\"rx-pg-size\" (ngModelChange)=\"resizePage($event)\" [(ngModel)]=\"paging.pg_size\">\n                                    <option value=\"10\" selected>10</option>\n                                    <option value=\"50\" selected>50</option>\n                                    <option value=\"100\" selected>100</option>\n                                </select> / page\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"col-lg-1 col-md-1\">\n</div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/group/group.component.scss":
/*!********************************************!*\
  !*** ./src/app/group/group.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th {\n  text-align: center; }\n\ntr > td {\n  text-align: right; }\n\n.rxsorting.rxdown:after {\n  right: 5%; }\n\n.rxsorting.rxup:after {\n  right: 5%; }\n"

/***/ }),

/***/ "./src/app/group/group.component.ts":
/*!******************************************!*\
  !*** ./src/app/group/group.component.ts ***!
  \******************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_group_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/group.service */ "./src/app/service/group.service.ts");
/* harmony import */ var _service_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/base.component */ "./src/app/service/base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupComponent = /** @class */ (function (_super) {
    __extends(GroupComponent, _super);
    function GroupComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.fullname = '';
        // App
        _this.isAppHidden = true;
        // Group
        _this.isGroupHidden = true;
        _this.isGroupEdit = false;
        _this.isnext = true;
        _this.search = { field: 'name', term: '' };
        _this.paging = { pg_page: 1, pg_size: 10, st_col: 'name', st_type: -1 };
        _this.header = [
            { id: 'icon', name: '#', is_search: 0, st_col: 'icon', st_type: 0 },
            { id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
            { id: 'is_active', name: 'Status', is_search: 1, st_col: 'is_active', st_type: 1 },
            { id: 'updated_at', name: 'Updated', is_search: 1, st_col: 'updated_at', st_type: 1 },
            { id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 }
        ];
        return _this;
    }
    GroupComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    /** Group function. */
    GroupComponent.prototype.toggleGroup = function () {
        this.isGroupHidden = !this.isGroupHidden;
    };
    GroupComponent.prototype.newGroup = function () {
        var _this = this;
        this.service.newGroup(this.onerow, function (data) { _this.refresh(); });
    };
    GroupComponent.prototype.getGroups = function () {
        var _this = this;
        this.service.getGroups((_a = {
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size
            },
            _a['search_' + this.search.field] = this.search.term,
            _a), function (data) {
            _this.groups = data;
        });
        var _a;
    };
    GroupComponent.prototype.editGroup = function (e, item) {
        e.stopPropagation();
        this.onerow = item;
        this.isGroupHidden = false;
        this.isGroupEdit = true;
    };
    GroupComponent.prototype.updateGroup = function () {
        var _this = this;
        this.service.updateGroup(this.onerow, function (data) { _this.refresh(); });
    };
    GroupComponent.prototype.deleteGroup = function (e, id) {
        var _this = this;
        if (window.confirm('Bạn chắc chắn muốn xoá?')) {
            e.stopPropagation();
            this.service.deleteGroup({ 'id': id }, function (data) { _this.refresh(); });
        }
    };
    /** App function. */
    GroupComponent.prototype.toggleApp = function (e, item) {
        e.stopPropagation();
        this.onerow = item;
        this.isAppHidden = !this.isAppHidden;
    };
    GroupComponent.prototype.newApp = function () {
        var _this = this;
        this.app.group_id = this.onerow._id;
        this.service.newApp(this.app, function (data) { _this.refresh(); });
    };
    GroupComponent.prototype.refresh = function () {
        if (!this.service.isExpired()) {
            this.reset();
            this.getGroups();
            this.fullname = this.service.getFullName();
        }
    };
    GroupComponent.prototype.sort = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol)
                this.paging.st_type *= -1;
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.getGroups();
        }
    };
    GroupComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    GroupComponent.prototype.fileChanged = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.service.upload(file, function (data) {
                _this.onerow.icon = data;
                _this.updateGroup();
            });
        }
    };
    GroupComponent.prototype.reset = function () {
        // Group
        this.isGroupHidden = true;
        this.isGroupEdit = false;
        this.onerow = {
            '_id': '',
            'name': 'group' + new Date().getMilliseconds(),
            'is_active': 1,
            'icon': 'icon' + new Date().getMilliseconds(),
        };
        this.groups = [];
        // Apps
        this.isAppHidden = true;
        this.app = {
            'platform': 'android',
            'name': 'app' + new Date().getMilliseconds(),
            'bundle_id': 'com.coresdk.sampleapp',
            'icon': ''
        };
    };
    GroupComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.getGroups();
    };
    GroupComponent.prototype.forgotPassword = function () {
        this.service.moveToForgotPassword();
    };
    GroupComponent.prototype.logout = function () {
        this.service.logout();
    };
    GroupComponent.prototype.onItemClicked = function (group) {
        var st = group.settings;
        if (st) {
            var app = st[0];
            if (app) {
                this.service.setGroupId(group._id);
                this.service.saveGroupSetting(st);
                this.service.moveToAppDetail(app.app_id);
            }
        }
    };
    GroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/group/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.scss */ "./src/app/group/group.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_group_service__WEBPACK_IMPORTED_MODULE_1__["GroupService"]])
    ], GroupComponent);
    return GroupComponent;
}(_service_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n    <div class=\"container\">\n    \t<br/>\n    \t<h1 class=\"display-3\" align=\"center\">HELP CENTER</h1>\n    \t<p class=\"lead\" align=\"center\">\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.\n        </p>\n        <div class=\"row justify-content-center\">\n            \n            <img src=\"assets/img/logo_full.png\" style=\"height: 128px\">\n            \n            <ul class=\"list-unstyled\" style=\"min-height: 1280px;\">\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/help/help.component.scss":
/*!******************************************!*\
  !*** ./src/app/help/help.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/help/help.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/privacy/privacy.component.html":
/*!************************************************!*\
  !*** ./src/app/privacy/privacy.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n    <div class=\"container\">\n    \t<br/>\n    \t<h1 class=\"display-3\" align=\"center\">POLICY PRIVACY</h1>\n    \t<p class=\"lead\" align=\"center\">\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.\n        </p>\n        <div class=\"row justify-content-center\">\n            \n            <img src=\"assets/img/logo_full.png\" style=\"height: 128px\">\n            \n            <ul class=\"list-unstyled\" style=\"min-height: 1280px;\">\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/privacy/privacy.component.scss":
/*!************************************************!*\
  !*** ./src/app/privacy/privacy.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/privacy/privacy.component.ts":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.scss */ "./src/app/privacy/privacy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/rbac/rbac-layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/rbac/rbac-layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"app-body\">\n    <div class=\"sidebar\">\n        <nav class=\"sidebar-nav\">\n            <ul class=\"nav\">\n                <li class=\"nav-title\"> User </li>\n                <div *ngIf=\"service.checkpermission('user')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/settings/admin/user']\">\n                            <i class=\"icon-fire\"></i> \n                            Users\n                        </a>\n                    </li>\n                </div>\n                <div *ngIf=\"service.checkpermission('role')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/settings/admin/role']\">\n                            <i class=\"icon-fire\"></i> \n                            Roles\n                        </a>\n                    </li>\n                </div>\n                <div *ngIf=\"service.checkpermission('permission')\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/settings/admin/permission']\">\n                            <i class=\"icon-fire\"></i> \n                            Permissions\n                        </a>\n                    </li>\n                </div>\n\n            </ul>\n        </nav>\n    </div>\n    <main class=\"main\">\n        <div class=\"container-fluid\">\n            <router-outlet></router-outlet>\n        </div>\n    </main>\n</div>\n<footer class=\"app-footer\">\n    &copy; CoreSDK 2017 <span class=\"float-right\">Powered by <a href=\"http://ecdc.vn/\">CoreSDK</a> </span>\n</footer>"

/***/ }),

/***/ "./src/app/rbac/rbac-layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/rbac/rbac-layout.component.ts ***!
  \***********************************************/
/*! exports provided: RbacLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RbacLayoutComponent", function() { return RbacLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RbacLayoutComponent = /** @class */ (function () {
    function RbacLayoutComponent(service) {
        this.service = service;
        this.disabled = false;
        this.status = { isopen: false };
        this.fullname = '';
    }
    RbacLayoutComponent.prototype.ngOnInit = function () {
        if (!this.service.isExpired()) {
            this.fullname = this.service.getFullName();
        }
    };
    RbacLayoutComponent.prototype.toggled = function (open) {
    };
    RbacLayoutComponent.prototype.forgotPassword = function () {
        this.service.moveToForgotPassword();
    };
    RbacLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    RbacLayoutComponent.prototype.logout = function () {
        this.service.logout();
    };
    RbacLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rbac',
            template: __webpack_require__(/*! ./rbac-layout.component.html */ "./src/app/rbac/rbac-layout.component.html")
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]])
    ], RbacLayoutComponent);
    return RbacLayoutComponent;
}());



/***/ }),

/***/ "./src/app/resource/resource.component.html":
/*!**************************************************!*\
  !*** ./src/app/resource/resource.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n    <div class=\"container\">\n        <br/>\n        <h1 align=\"center\" class=\"display-3\">RESOURCES</h1>\n        <p class=\"lead\" align=\"center\">\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.\n        </p>\n        <div class=\"row justify-content-center\">\n            <img src=\"assets/img/logo_full.png\" style=\"height: 128px\">\n            <ul class=\"list-unstyled\" style=\"min-height: 1280px;\">\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/logo.png\" style=\"height: 64px\">\n                    <div class=\"media-body\">\n                        <h6 class=\"mt-0 mb-1\">List-based media object</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/resource/resource.component.scss":
/*!**************************************************!*\
  !*** ./src/app/resource/resource.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".media {\n  margin-top: 2%; }\n"

/***/ }),

/***/ "./src/app/resource/resource.component.ts":
/*!************************************************!*\
  !*** ./src/app/resource/resource.component.ts ***!
  \************************************************/
/*! exports provided: ResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceComponent", function() { return ResourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourceComponent = /** @class */ (function () {
    function ResourceComponent() {
    }
    ResourceComponent.prototype.ngOnInit = function () {
    };
    ResourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource',
            template: __webpack_require__(/*! ./resource.component.html */ "./src/app/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.scss */ "./src/app/resource/resource.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourceComponent);
    return ResourceComponent;
}());



/***/ }),

/***/ "./src/app/service/base.component.ts":
/*!*******************************************!*\
  !*** ./src/app/service/base.component.ts ***!
  \*******************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _service_private__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service.private */ "./src/app/service/service.private.ts");

var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
    }
    BaseComponent.prototype.defaultIcon = function () {
        return "../assets/img/ico_app_default.png";
    };
    BaseComponent.prototype.onImageLoadedError = function (event) {
        event.target.src = this.defaultIcon();
    };
    BaseComponent.prototype.getUrl = function (icon) {
        if (icon)
            return _service_private__WEBPACK_IMPORTED_MODULE_0__["PrivateService"].BASE_RESOURCE_URL + icon;
        return this.defaultIcon();
    };
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/service/base.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/base.service.ts ***!
  \*****************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routing.service */ "./src/app/service/routing.service.ts");
/* harmony import */ var _service_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service.config */ "./src/app/service/service.config.ts");
/* harmony import */ var _service_private__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service.private */ "./src/app/service/service.private.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SourceApiUrls;
(function (SourceApiUrls) {
    SourceApiUrls["get"] = "listsource";
    SourceApiUrls["insert"] = "listsource";
    SourceApiUrls["delete"] = "listsource/delete";
    SourceApiUrls["update"] = "listsource/edit";
})(SourceApiUrls || (SourceApiUrls = {}));
var BaseService = /** @class */ (function () {
    function BaseService(http, router, config, flash) {
        this.http = http;
        this.router = router;
        this.config = config;
        this.flash = flash;
        this.KEY_AUTH = 'fAuth';
        this.USER_TOKEN = 'ftoken';
        this.KEY_APP_ID = 'fAppId';
        this.KEY_GROUP_ID = 'fGroupId';
    }
    BaseService.prototype.makeHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
        });
        return headers;
    };
    BaseService.prototype.upload = function (file, callback) {
        var _this = this;
        var formData = new FormData();
        formData.append('timeseed', '' + Date.now());
        formData.append('uploadFile', file, file.name);
        formData.append('authorization', this.getToken());
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        this.http.post(_service_private__WEBPACK_IMPORTED_MODULE_6__["PrivateService"].BASE_UPLOAD_URL, formData)
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
        }, function (err) {
            _this.failure(err);
        });
    };
    BaseService.prototype.uploadFile = function (file, callback) {
        var _this = this;
        var formData = new FormData();
        formData.append('timeseed', '' + Date.now());
        formData.append('uploadFile', file, file.name);
        formData.append('authorization', this.getToken());
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        this.http.post(_service_private__WEBPACK_IMPORTED_MODULE_6__["PrivateService"].BASE_UPLOAD_URL_FILE, formData)
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
        }, function (err) {
            _this.failure(err);
        });
    };
    BaseService.prototype.get = function (url, dParams, callback) {
        var _this = this;
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["URLSearchParams"]();
        params.append('authorization', this.getToken());
        params.append('timeseed', '' + Date.now());
        if (dParams)
            for (var key in dParams)
                params.append(key, dParams[key]);
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
                else if (json['success'] && json['success'] == -3) {
                    _this.logout();
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
    BaseService.prototype.post = function (url, body, dParams, callback) {
        var _this = this;
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["URLSearchParams"]();
        params.append('authorization', this.getToken());
        params.append('timeseed', '' + Date.now());
        if (dParams)
            for (var key in dParams)
                params.append(key, dParams[key]);
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
                else if (json['success'] && json['success'] == -3) {
                    _this.logout();
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
    BaseService.prototype.failure = function (error) {
        // this.flash.show('Request failed\n' + error, { cssClass: 'alert-warning' });
    };
    BaseService.prototype.successful = function (msg, code) {
        /*if(code == 1)
            this.flash.show(msg, { cssClass: 'alert-success' });*/
    };
    BaseService.prototype.request = function (url, params, callback) {
        this.get(this.getRestUrl(url), params, function (data) {
            callback(data);
        });
    };
    BaseService.prototype.baseUrl = function () {
        return _service_private__WEBPACK_IMPORTED_MODULE_6__["PrivateService"].BASE_URL;
    };
    BaseService.prototype.getRestUrl = function (postfix) {
        return this.baseUrl() + postfix;
    };
    BaseService.prototype.getToken = function () {
        return ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get(this.USER_TOKEN);
    };
    BaseService.prototype.setToken = function (token) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set(this.USER_TOKEN, token);
    };
    BaseService.prototype.setAuth = function (auth) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set(this.KEY_AUTH, auth);
    };
    BaseService.prototype.getAuth = function () {
        return JSON.parse(ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get(this.KEY_AUTH));
    };
    BaseService.prototype.setCookie = function (key, value) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set(key, value);
    };
    BaseService.prototype.removeCookie = function (key) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete(key);
    };
    BaseService.prototype.getCookie = function (key) {
        var data = ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get(key);
        if (data)
            return JSON.parse(data);
        return null;
    };
    BaseService.prototype.setAppId = function (appId) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set(this.KEY_APP_ID, appId);
    };
    BaseService.prototype.moveToAppDetail = function (appId) {
        this.setAppId(appId);
        this.router.moveToAppDetail();
    };
    BaseService.prototype.moveToForgotPassword = function () {
        this.router.moveToForgotPassword();
    };
    BaseService.prototype.logout = function () {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].deleteAll();
        this.moveToLogin();
    };
    BaseService.prototype.moveToLogin = function () {
        this.router.moveToLogin();
    };
    BaseService.prototype.isExpired = function () {
        if (ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get(this.USER_TOKEN))
            return false;
        this.router.moveToLogin();
        return true;
    };
    BaseService.prototype.getAppId = function () {
        return ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get(this.KEY_APP_ID);
    };
    BaseService.prototype.getFullName = function () {
        return this.getAuth().fullname;
    };
    BaseService.prototype.login = function (params) {
        var _this = this;
        this.post(this.config.API_LOGIN, null, params, function (data) {
            _this.setToken(data.user.authorization);
            _this.setAuth(JSON.stringify(data.user));
            _this.rxsetLocal('arrper', data.arrper);
            _this.moveToApps();
        });
    };
    BaseService.prototype.register = function (params, callback) {
        this.post(this.config.api_user_register, params, null, function (data) { callback(data); });
    };
    BaseService.prototype.moveToApps = function () {
        this.router.moveToApps();
    };
    BaseService.prototype.getUrl = function (icon) {
        return _service_private__WEBPACK_IMPORTED_MODULE_6__["PrivateService"].BASE_RESOURCE_URL + icon;
    };
    BaseService.prototype.getSources = function (callback) {
        this.get(this.baseUrl() + SourceApiUrls.get, {
            'app_id': this.getAppId(),
            'pg_page': 1,
            'pg_size': 100,
            'st_col': 'sourcename',
            'st_type': 1,
        }, function (data) {
            callback(data);
        });
    };
    BaseService.prototype.deleteSource = function (params, callback) {
        this.get(this.getRestUrl(SourceApiUrls.delete), params, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    BaseService.prototype.insertSource = function (params, callback) {
        this.post(this.getRestUrl(SourceApiUrls.insert), params, null, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    BaseService.prototype.updateSource = function (params, callback) {
        this.post(this.getRestUrl(SourceApiUrls.update), params, null, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    BaseService.prototype.setGroupId = function (groupId) {
        this.setCookie(this.KEY_GROUP_ID, groupId);
    };
    BaseService.prototype.getGroupId = function () {
        return ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get(this.KEY_GROUP_ID);
    };
    BaseService.prototype.fromDate = function (year, month, date) {
        return new Date(year, month, date - 200);
    };
    // COMMON DEFAULT SUPPORT METHOD
    BaseService.prototype.defaultPaging = function (field) {
        return { pg_page: 1, pg_size: 10, st_col: field, st_type: -1 };
    };
    BaseService.prototype.formatDate = function (date) {
        var mm = date.getMonth() + 1;
        var dd = date.getDate();
        return [date.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('-');
    };
    BaseService.prototype.defaultPlatforms = function () {
        return [
            { 'id': '-1', 'name': 'All' },
            { 'id': 'android', 'name': 'Android' },
            { 'id': 'ios', 'name': 'iOS' },
            { 'id': 'web', 'name': 'Web' }
        ];
    };
    BaseService.prototype.rxsetLocal = function (cname, cvalue) {
        if (typeof window !== 'undefined') {
            localStorage.setItem(cname, cvalue);
        }
    };
    BaseService.prototype.rxgetLocal = function (cname, cdefault) {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(cname);
        }
        else {
            return cdefault;
        }
    };
    BaseService.prototype.checkpermission = function (strcheck) {
        var strper = this.rxgetLocal('arrper', '');
        var arrper = [];
        if (strper && strper.length > 0 && strper.indexOf(',') !== -1) {
            arrper = strper.split(',');
        }
        if (arrper.length !== 0) {
            if (arrper.indexOf(strcheck) !== -1) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    BaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"],
            _service_config__WEBPACK_IMPORTED_MODULE_5__["ConfigService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"]])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/service/campaign.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/campaign.service.ts ***!
  \*********************************************/
/*! exports provided: CampaignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignService", function() { return CampaignService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/service/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CampaignApiUrls;
(function (CampaignApiUrls) {
    CampaignApiUrls["get"] = "campaign";
    CampaignApiUrls["new"] = "campaign";
    CampaignApiUrls["delete"] = "campaign/delete";
    CampaignApiUrls["update"] = "campaign/edit";
})(CampaignApiUrls || (CampaignApiUrls = {}));
var AdsApiUrls;
(function (AdsApiUrls) {
    AdsApiUrls["get"] = "campaign-ad";
    AdsApiUrls["insert"] = "campaign-ad";
    AdsApiUrls["update"] = "campaign-ad/edit";
    AdsApiUrls["delete"] = "campaign-ad/delete";
})(AdsApiUrls || (AdsApiUrls = {}));
var AdsReportUrls;
(function (AdsReportUrls) {
    AdsReportUrls["get"] = "report-ads";
})(AdsReportUrls || (AdsReportUrls = {}));
var CampaignService = /** @class */ (function (_super) {
    __extends(CampaignService, _super);
    function CampaignService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CAMPAIGN = "CAMPAIGN";
        return _this;
    }
    CampaignService.prototype.getCampaigns = function (params, callback) {
        this.get(this.getRestUrl(CampaignApiUrls.get), params, function (data) { callback(Array.isArray(data) ? data : []); });
    };
    CampaignService.prototype.insert = function (params, callback) {
        this.post(this.getRestUrl(CampaignApiUrls.new), JSON.stringify(params), null, function (data) { callback(data); });
    };
    CampaignService.prototype.update = function (params, callback) {
        this.post(this.getRestUrl(CampaignApiUrls.update), JSON.stringify(params), null, function (data) { callback(data); });
    };
    CampaignService.prototype.delete = function (params, callback) {
        this.get(this.getRestUrl(CampaignApiUrls.delete), params, function (data) { callback(data); });
    };
    CampaignService.prototype.getAds = function (params, callback) {
        this.get(this.getRestUrl(AdsApiUrls.get), params, function (data) { callback(Array.isArray(data) ? data : []); });
    };
    CampaignService.prototype.getAdsReport = function (params, callback) {
        this.get(this.getRestUrl(AdsReportUrls.get), params, function (data) { callback(Array.isArray(data) ? data : []); });
    };
    CampaignService.prototype.createAd = function (params, callback) {
        this.post(this.getRestUrl(AdsApiUrls.insert), JSON.stringify(params), null, function (data) { callback(data); });
    };
    CampaignService.prototype.updateAd = function (params, callback) {
        this.post(this.getRestUrl(AdsApiUrls.update), JSON.stringify(params), null, function (data) { callback(data); });
    };
    CampaignService.prototype.deleteAd = function (params, callback) {
        this.get(this.getRestUrl(AdsApiUrls.delete), params, function (data) { callback(data); });
    };
    CampaignService.prototype.moveToAds = function (campaign) {
        this.setCookie(this.CAMPAIGN, JSON.stringify(campaign));
        this.router.moveToAds();
    };
    CampaignService.prototype.moveToCampaigns = function () {
        this.router.moveToCampaigns();
    };
    CampaignService.prototype.getCampaign = function () {
        return this.getCookie(this.CAMPAIGN);
    };
    CampaignService.prototype.removeCampaign = function () {
        this.removeCookie(this.CAMPAIGN);
    };
    CampaignService.prototype.getAdType = function () {
        return [
            { 'id': 1, 'name': 'Banner' },
            { 'id': 2, 'name': 'Facebook' },
            { 'id': 3, 'name': 'Google' }
        ];
    };
    CampaignService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CampaignService);
    return CampaignService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/service/group.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/group.service.ts ***!
  \******************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/service/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GroupApiUrls;
(function (GroupApiUrls) {
    GroupApiUrls["get"] = "groupApp";
    GroupApiUrls["new"] = "groupApp";
    GroupApiUrls["delete"] = "groupApp/delete";
    GroupApiUrls["update"] = "groupApp/edit";
    GroupApiUrls["app_get"] = "app";
    GroupApiUrls["app_new"] = "app/index";
})(GroupApiUrls || (GroupApiUrls = {}));
var AppApiUrls;
(function (AppApiUrls) {
    AppApiUrls["detail"] = "app/details";
    AppApiUrls["reset_key"] = "app/resetkey";
    AppApiUrls["delete"] = "app/delete";
    AppApiUrls["update"] = "app/edit";
})(AppApiUrls || (AppApiUrls = {}));
var GroupService = /** @class */ (function (_super) {
    __extends(GroupService, _super);
    function GroupService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.KEY_GROUP_SETTING = 'KEY_GROUP_SETTING';
        return _this;
    }
    GroupService.prototype.saveGroupSetting = function (settings) {
        this.setCookie(this.KEY_GROUP_SETTING, JSON.stringify(settings));
    };
    GroupService.prototype.getGroupSetting = function () {
        return this.getCookie(this.KEY_GROUP_SETTING);
    };
    GroupService.prototype.newGroup = function (params, callback) {
        if (params.is_active)
            params.is_active = 1;
        else
            params.is_active = 0;
        this.post(this.baseUrl() + GroupApiUrls.new, JSON.stringify(params), null, function (data) {
            callback(data);
        });
    };
    GroupService.prototype.getGroups = function (params, callback) {
        this.get(this.baseUrl() + GroupApiUrls.get, params, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    GroupService.prototype.deleteGroup = function (params, callback) {
        this.get(this.baseUrl() + GroupApiUrls.delete, params, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    GroupService.prototype.newApp = function (params, callback) {
        this.post(this.baseUrl() + GroupApiUrls.app_new, JSON.stringify(params), null, function (data) {
            callback(data);
        });
    };
    GroupService.prototype.getApps = function (params, callback) {
        this.get(this.baseUrl() + GroupApiUrls.app_get, params, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    GroupService.prototype.updateGroup = function (params, callback) {
        if (params.is_active)
            params.is_active = 1;
        else
            params.is_active = 0;
        this.post(this.baseUrl() + GroupApiUrls.update, params, null, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    GroupService.prototype.detailApp = function (params, callback) {
        this.request(AppApiUrls.detail, params, callback);
    };
    GroupService.prototype.resetKey = function (params, callback) {
        this.request(AppApiUrls.reset_key, params, callback);
    };
    GroupService.prototype.updateApp = function (body, params, callback) {
        this.post(this.baseUrl() + AppApiUrls.update, body, params, function (data) {
            callback(data);
        });
    };
    GroupService.prototype.deleteApp = function (params, callback) {
        this.request(AppApiUrls.delete, params, callback);
    };
    GroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], GroupService);
    return GroupService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/service/notification.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/notification.service.ts ***!
  \*************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/service/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotificationApiUrls;
(function (NotificationApiUrls) {
    NotificationApiUrls["get"] = "notification";
})(NotificationApiUrls || (NotificationApiUrls = {}));
var NotificationService = /** @class */ (function (_super) {
    __extends(NotificationService, _super);
    function NotificationService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationService.prototype.getNotifications = function (params, callback) {
        this.get(this.getRestUrl(NotificationApiUrls.get), params, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    NotificationService.prototype.sendMessage = function (params, callback) {
        this.post(this.getRestUrl(NotificationApiUrls.get), JSON.stringify(params), null, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NotificationService);
    return NotificationService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/service/payment.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/payment.service.ts ***!
  \********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/service/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PaymentApiUrls;
(function (PaymentApiUrls) {
    PaymentApiUrls["get"] = "inapp-item";
    PaymentApiUrls["insert"] = "inapp-item";
    PaymentApiUrls["delete"] = "inapp-item/delete";
    PaymentApiUrls["update"] = "inapp-item/edit";
})(PaymentApiUrls || (PaymentApiUrls = {}));
var PaymentService = /** @class */ (function (_super) {
    __extends(PaymentService, _super);
    function PaymentService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentService.prototype.getPayments = function (param, callback) {
        this.get(this.getRestUrl(PaymentApiUrls.get), param, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    PaymentService.prototype.insert = function (param, callback) {
        this.post(this.getRestUrl(PaymentApiUrls.insert), param, null, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    PaymentService.prototype.update = function (param, callback) {
        this.post(this.getRestUrl(PaymentApiUrls.update), param, null, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    PaymentService.prototype.delete = function (param, callback) {
        this.get(this.getRestUrl(PaymentApiUrls.delete), param, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    PaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PaymentService);
    return PaymentService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/service/player-ads.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/player-ads.service.ts ***!
  \***********************************************/
/*! exports provided: PlayerAdsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerAdsService", function() { return PlayerAdsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/service/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PlayerApiUrls;
(function (PlayerApiUrls) {
    PlayerApiUrls["get"] = "player";
})(PlayerApiUrls || (PlayerApiUrls = {}));
var PlayerAdsApiUrls;
(function (PlayerAdsApiUrls) {
    PlayerAdsApiUrls["get"] = "player-ads";
    PlayerAdsApiUrls["insert"] = "player-ads";
    PlayerAdsApiUrls["delete"] = "player-ads/delete";
})(PlayerAdsApiUrls || (PlayerAdsApiUrls = {}));
var PlayerAdsService = /** @class */ (function (_super) {
    __extends(PlayerAdsService, _super);
    function PlayerAdsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerAdsService.prototype.getPlayers = function (param, callback) {
        this.get(this.getRestUrl(PlayerApiUrls.get), param, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    PlayerAdsService.prototype.getAdsPlayers = function (param, callback) {
        this.get(this.getRestUrl(PlayerAdsApiUrls.get), param, function (data) {
            callback(data);
        });
    };
    PlayerAdsService.prototype.add = function (param, callback) {
        this.post(this.getRestUrl(PlayerAdsApiUrls.insert), param, null, function (data) {
            callback(data);
        });
    };
    PlayerAdsService.prototype.delete = function (param, callback) {
        this.get(this.getRestUrl(PlayerAdsApiUrls.delete), param, function (data) {
            callback(data);
        });
    };
    PlayerAdsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PlayerAdsService);
    return PlayerAdsService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/service/player.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/player.service.ts ***!
  \*******************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/service/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PlayerApiUrls;
(function (PlayerApiUrls) {
    PlayerApiUrls["get"] = "player";
})(PlayerApiUrls || (PlayerApiUrls = {}));
var PlayerService = /** @class */ (function (_super) {
    __extends(PlayerService, _super);
    function PlayerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerService.prototype.getPlayers = function (param, callback) {
        this.get(this.getRestUrl(PlayerApiUrls.get), param, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    PlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PlayerService);
    return PlayerService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/service/rbac.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/rbac.service.ts ***!
  \*****************************************/
/*! exports provided: RbacService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RbacService", function() { return RbacService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/service/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserApiUrls;
(function (UserApiUrls) {
    UserApiUrls["get"] = "user";
    UserApiUrls["new"] = "user";
    UserApiUrls["delete"] = "user/delete";
    UserApiUrls["update"] = "user/edit";
})(UserApiUrls || (UserApiUrls = {}));
var RoleApiUrls;
(function (RoleApiUrls) {
    RoleApiUrls["get"] = "role";
    RoleApiUrls["new"] = "role";
    RoleApiUrls["getall"] = "role/all";
    RoleApiUrls["delete"] = "role/delete";
    RoleApiUrls["update"] = "role/edit";
})(RoleApiUrls || (RoleApiUrls = {}));
var PermissionApiUrls;
(function (PermissionApiUrls) {
    PermissionApiUrls["get"] = "permission";
    PermissionApiUrls["new"] = "permission";
    PermissionApiUrls["gen"] = "permission/generation";
    PermissionApiUrls["getall"] = "permission/all";
    PermissionApiUrls["delete"] = "permission/delete";
    PermissionApiUrls["update"] = "permission/edit";
})(PermissionApiUrls || (PermissionApiUrls = {}));
var RbacService = /** @class */ (function (_super) {
    __extends(RbacService, _super);
    function RbacService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // USER
    RbacService.prototype.getUsers = function (params, callback) {
        this.get(this.getRestUrl(UserApiUrls.get), params, function (data) { callback(Array.isArray(data) ? data : []); });
    };
    RbacService.prototype.insertUser = function (params, callback) {
        this.post(this.getRestUrl(UserApiUrls.new), JSON.stringify(params), null, function (data) { callback(data); });
    };
    RbacService.prototype.updateUser = function (params, callback) {
        this.post(this.getRestUrl(UserApiUrls.update), JSON.stringify(params), null, function (data) { callback(data); });
    };
    RbacService.prototype.deleteUser = function (params, callback) {
        this.get(this.getRestUrl(UserApiUrls.delete), params, function (data) { callback(data); });
    };
    // ROLE
    RbacService.prototype.getRoles = function (params, callback) {
        this.get(this.getRestUrl(RoleApiUrls.get), params, function (data) { callback(Array.isArray(data) ? data : []); });
    };
    RbacService.prototype.getallRoles = function (params, callback) {
        this.get(this.getRestUrl(RoleApiUrls.getall), params, function (data) { callback(Array.isArray(data) ? data : []); });
    };
    RbacService.prototype.insertRole = function (params, callback) {
        this.post(this.getRestUrl(RoleApiUrls.new), JSON.stringify(params), null, function (data) { callback(data); });
    };
    RbacService.prototype.updateRole = function (params, callback) {
        this.post(this.getRestUrl(RoleApiUrls.update), JSON.stringify(params), null, function (data) { callback(data); });
    };
    RbacService.prototype.deleteRole = function (params, callback) {
        this.get(this.getRestUrl(RoleApiUrls.delete), params, function (data) { callback(data); });
    };
    // PERMISSION
    RbacService.prototype.getPermissions = function (params, callback) {
        this.get(this.getRestUrl(PermissionApiUrls.get), params, function (data) { callback(Array.isArray(data) ? data : []); });
    };
    RbacService.prototype.getallPermissions = function (params, callback) {
        this.get(this.getRestUrl(PermissionApiUrls.getall), params, function (data) { callback(Array.isArray(data) ? data : []); });
    };
    RbacService.prototype.genPermissions = function (params, callback) {
        this.get(this.getRestUrl(PermissionApiUrls.gen), params, function (data) { callback(Array.isArray(data) ? data : []); });
    };
    RbacService.prototype.insertPermission = function (params, callback) {
        this.post(this.getRestUrl(PermissionApiUrls.new), JSON.stringify(params), null, function (data) { callback(data); });
    };
    RbacService.prototype.updatePermission = function (params, callback) {
        this.post(this.getRestUrl(PermissionApiUrls.update), JSON.stringify(params), null, function (data) { callback(data); });
    };
    RbacService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], RbacService);
    return RbacService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/service/report.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/report.service.ts ***!
  \*******************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/service/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ChartApiUrls;
(function (ChartApiUrls) {
    ChartApiUrls["analyze_roi"] = "report-roi";
    ChartApiUrls["analyze_roiPd"] = "report-roiPd";
    ChartApiUrls["analyze_arm"] = "report-arm";
    ChartApiUrls["analyze_armChart"] = "report-arm/chart";
    ChartApiUrls["analyze_armPd"] = "report-armPd";
    ChartApiUrls["analyze_armPdChart"] = "report-armPd/chart";
    ChartApiUrls["analyze_cohort"] = "report-cohort";
    ChartApiUrls["analyze_kpi"] = "report-kpi";
    ChartApiUrls["analyze_card"] = "report-card";
    ChartApiUrls["analyze_cardChart"] = "report-card/chart";
})(ChartApiUrls || (ChartApiUrls = {}));
var ReportService = /** @class */ (function (_super) {
    __extends(ReportService, _super);
    function ReportService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReportService.prototype.roiAnalysis = function (params, callback) {
        this.get(this.getRestUrl(ChartApiUrls.analyze_roi), params, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    ReportService.prototype.roiPdAnalysis = function (params, callback) {
        this.get(this.getRestUrl(ChartApiUrls.analyze_roiPd), params, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    ReportService.prototype.armAnalysis = function (params, callback) {
        this.get(this.getRestUrl(ChartApiUrls.analyze_arm), params, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    ReportService.prototype.armChartAnalysis = function (params, callback) {
        this.get(this.getRestUrl(ChartApiUrls.analyze_armChart), params, function (data) {
            callback(data);
        });
    };
    ReportService.prototype.armPdAnalysis = function (params, callback) {
        this.get(this.getRestUrl(ChartApiUrls.analyze_armPd), params, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    ReportService.prototype.armPdChartAnalysis = function (params, callback) {
        this.get(this.getRestUrl(ChartApiUrls.analyze_armPdChart), params, function (data) {
            callback(data);
        });
    };
    ReportService.prototype.cohortAnalysis = function (params, callback) {
        this.get(this.getRestUrl(ChartApiUrls.analyze_cohort), params, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    ReportService.prototype.kpiAnalysis = function (params, callback) {
        this.get(this.getRestUrl(ChartApiUrls.analyze_kpi), params, function (data) {
            var keys = {
                'a1': 'A1',
                'a7': 'A7',
                'a30': 'A30',
                'nru0': 'NRU0',
                'gross_rev': 'Gross Rev',
                'pu': 'PU',
                'pu1': 'PU1',
                'arpu': 'ARPU',
                'arppu': 'ARPPU'
            };
            data.splice(0, 0, keys);
            callback(data);
        });
    };
    ReportService.prototype.cardAnalysis = function (params, callback) {
        this.get(this.getRestUrl(ChartApiUrls.analyze_card), params, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    ReportService.prototype.cardChartAnalysis = function (params, callback) {
        this.get(this.getRestUrl(ChartApiUrls.analyze_cardChart), params, function (data) {
            callback(data);
        });
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ReportService);
    return ReportService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/service/routing.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/routing.service.ts ***!
  \********************************************/
/*! exports provided: RoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_private__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.private */ "./src/app/service/service.private.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoutingService = /** @class */ (function () {
    function RoutingService(router) {
        this.router = router;
        this.BASE_URL = _service_private__WEBPACK_IMPORTED_MODULE_2__["PrivateService"].BASE_URL;
    }
    RoutingService.prototype.moveToLogin = function () {
        this.router.navigate(['/login']);
    };
    RoutingService.prototype.moveToApps = function () {
        this.router.navigate(['/groups']);
    };
    RoutingService.prototype.moveToForgotPassword = function () {
        this.router.navigate(['/forgot-password']);
    };
    RoutingService.prototype.moveToAppDetail = function () {
        this.router.navigate(['/apps/admin']);
    };
    RoutingService.prototype.moveToCampaigns = function () {
        this.router.navigate(['/apps/admin/campaign']);
    };
    RoutingService.prototype.moveToAds = function () {
        this.router.navigate(['/apps/admin/ads']);
    };
    RoutingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoutingService);
    return RoutingService;
}());



/***/ }),

/***/ "./src/app/service/service.config.ts":
/*!*******************************************!*\
  !*** ./src/app/service/service.config.ts ***!
  \*******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_private__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service.private */ "./src/app/service/service.private.ts");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.API_LOGIN = _service_private__WEBPACK_IMPORTED_MODULE_1__["PrivateService"].BASE_URL + 'authorize';
        // Tracking
        this.api_tracking_get = _service_private__WEBPACK_IMPORTED_MODULE_1__["PrivateService"].BASE_URL + 'tracking';
        // User
        this.api_user_register = _service_private__WEBPACK_IMPORTED_MODULE_1__["PrivateService"].BASE_URL + "user";
        // Campaign
        this.api_campaign_get = _service_private__WEBPACK_IMPORTED_MODULE_1__["PrivateService"].BASE_URL + 'campaign';
        this.api_campaign_del = _service_private__WEBPACK_IMPORTED_MODULE_1__["PrivateService"].BASE_URL + 'campaign/delete';
        this.api_campaign_add = _service_private__WEBPACK_IMPORTED_MODULE_1__["PrivateService"].BASE_URL + 'campaign/index';
        this.api_campaign_edit = _service_private__WEBPACK_IMPORTED_MODULE_1__["PrivateService"].BASE_URL + 'campaign/edit';
        this.api_campaign_restore = _service_private__WEBPACK_IMPORTED_MODULE_1__["PrivateService"].BASE_URL + 'campaign/restore';
        this.api_campaign_get_recycle = _service_private__WEBPACK_IMPORTED_MODULE_1__["PrivateService"].BASE_URL + 'campaign/recycle';
        this.api_upload_image = _service_private__WEBPACK_IMPORTED_MODULE_1__["PrivateService"].BASE_URL + 'upload';
        this.api_image_directory = _service_private__WEBPACK_IMPORTED_MODULE_1__["PrivateService"].BASE_URL + 'upload/image/';
        // Analytics
        this.API_APP_OVERVIEW = _service_private__WEBPACK_IMPORTED_MODULE_1__["PrivateService"].BASE_URL + 'app/overview';
        // Router
        this.LINK_TO_APPS = '/apps';
        this.LINK_TO_LOGIN = '/login';
        // User privacy
        this.USER_TOKEN = 'ftoken';
        this.USER_FULLNAME = 'fname';
        // App config
        this.APP_INFO = 'fApp';
        this.APP_ID = 'fAppId';
    }
    ConfigService.prototype.setFullname = function (fullname) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set(this.USER_FULLNAME, fullname);
    };
    ConfigService.prototype.setAppInfo = function (info) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set(this.APP_INFO, JSON.stringify(info));
    };
    ConfigService.prototype.setAppId = function (id) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set(this.APP_ID, id);
    };
    ConfigService.prototype.getAppId = function () {
        return ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get(this.APP_ID);
    };
    ConfigService.prototype.getToken = function () {
        return ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get(this.USER_TOKEN);
    };
    ConfigService.prototype.getAppInfo = function () {
        return JSON.parse(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get(this.APP_INFO));
    };
    ConfigService.prototype.getFullName = function () {
        var name = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get(this.USER_FULLNAME);
        if (!name)
            name = 'User';
        return name;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/service/service.private.ts":
/*!********************************************!*\
  !*** ./src/app/service/service.private.ts ***!
  \********************************************/
/*! exports provided: PrivateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateService", function() { return PrivateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PrivateService = /** @class */ (function () {
    function PrivateService() {
    }
    PrivateService_1 = PrivateService;
    // static BASE_DOMAIN = 'http://sdkapi.100d.mobi/';
    PrivateService.BASE_DOMAIN = 'http://dev.sdkapi.100d.mobi/';
    PrivateService.BASE_URL = PrivateService_1.BASE_DOMAIN + 'v1/';
    PrivateService.BASE_UPLOAD_URL = PrivateService_1.BASE_DOMAIN + 'v1/upload';
    PrivateService.BASE_RESOURCE_URL = PrivateService_1.BASE_DOMAIN + 'upload/image/';
    PrivateService.BASE_UPLOAD_URL_FILE = PrivateService_1.BASE_DOMAIN + 'v1/upload/file';
    PrivateService = PrivateService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PrivateService);
    return PrivateService;
    var PrivateService_1;
}());



/***/ }),

/***/ "./src/app/service/shared.module.ts":
/*!******************************************!*\
  !*** ./src/app/service/shared.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
/* harmony import */ var _service_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/group.service */ "./src/app/service/group.service.ts");
/* harmony import */ var _service_telco_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/telco.service */ "./src/app/service/telco.service.ts");
/* harmony import */ var _service_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/report.service */ "./src/app/service/report.service.ts");
/* harmony import */ var _service_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/player.service */ "./src/app/service/player.service.ts");
/* harmony import */ var _service_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/payment.service */ "./src/app/service/payment.service.ts");
/* harmony import */ var _service_campaign_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/campaign.service */ "./src/app/service/campaign.service.ts");
/* harmony import */ var _service_player_ads_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/player-ads.service */ "./src/app/service/player-ads.service.ts");
/* harmony import */ var _service_transaction_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/transaction.service */ "./src/app/service/transaction.service.ts");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var _service_rbac_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/rbac.service */ "./src/app/service/rbac.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"], _service_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"], _service_telco_service__WEBPACK_IMPORTED_MODULE_3__["TelcoService"], _service_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"], _service_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
                _service_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"], _service_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"], _service_campaign_service__WEBPACK_IMPORTED_MODULE_7__["CampaignService"], _service_player_ads_service__WEBPACK_IMPORTED_MODULE_8__["PlayerAdsService"], _service_rbac_service__WEBPACK_IMPORTED_MODULE_11__["RbacService"], _service_transaction_service__WEBPACK_IMPORTED_MODULE_9__["TransactionService"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/service/telco.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/telco.service.ts ***!
  \******************************************/
/*! exports provided: TelcoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelcoService", function() { return TelcoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/service/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TelcoApiUrls;
(function (TelcoApiUrls) {
    TelcoApiUrls["get"] = "card-item";
    TelcoApiUrls["insert"] = "card-item";
    TelcoApiUrls["delete"] = "card-item/delete";
    TelcoApiUrls["update"] = "card-item/edit";
})(TelcoApiUrls || (TelcoApiUrls = {}));
var TelcoService = /** @class */ (function (_super) {
    __extends(TelcoService, _super);
    function TelcoService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TelcoService.prototype.getTelcos = function (param, callback) {
        this.get(this.getRestUrl(TelcoApiUrls.get), param, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    TelcoService.prototype.insert = function (param, callback) {
        this.post(this.getRestUrl(TelcoApiUrls.insert), param, null, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    TelcoService.prototype.update = function (param, callback) {
        this.post(this.getRestUrl(TelcoApiUrls.update), param, null, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    TelcoService.prototype.delete = function (param, callback) {
        this.get(this.getRestUrl(TelcoApiUrls.delete), param, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    TelcoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TelcoService);
    return TelcoService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/service/transaction.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/transaction.service.ts ***!
  \************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/service/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PlayerApiUrls;
(function (PlayerApiUrls) {
    PlayerApiUrls["get"] = "iap-transaction";
})(PlayerApiUrls || (PlayerApiUrls = {}));
var TransactionService = /** @class */ (function (_super) {
    __extends(TransactionService, _super);
    function TransactionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransactionService.prototype.getTransactions = function (param, callback) {
        this.get(this.getRestUrl(PlayerApiUrls.get), param, function (data) {
            callback(Array.isArray(data) ? data : []);
        });
    };
    TransactionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TransactionService);
    return TransactionService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/shared/404.component.html":
/*!*******************************************!*\
  !*** ./src/app/shared/404.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-6\">\n                <div class=\"clearfix\">\n                    <h1 class=\"float-left display-3 mr-2\">404</h1>\n                    <h4 class=\"pt-1\">Oops! You're lost.</h4>\n                    <p class=\"text-muted\">The page you are looking for was not found.</p>\n                </div>\n                <div class=\"input-prepend input-group\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i>\n                    </span>\n                    <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n                    <span class=\"input-group-btn\">\n                        <button class=\"btn btn-info\" type=\"button\">Search</button>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/404.component.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/404.component.ts ***!
  \*****************************************/
/*! exports provided: p404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p404Component", function() { return p404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var p404Component = /** @class */ (function () {
    function p404Component() {
    }
    p404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./404.component.html */ "./src/app/shared/404.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], p404Component);
    return p404Component;
}());



/***/ }),

/***/ "./src/app/shared/aside.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/aside.directive.ts ***!
  \*******************************************/
/*! exports provided: AsideToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideToggleDirective", function() { return AsideToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AsideToggleDirective.prototype, "toggleOpen", null);
    AsideToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '.aside-menu-toggler',
        }),
        __metadata("design:paramtypes", [])
    ], AsideToggleDirective);
    return AsideToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/shared/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"app-footer blue center-on-small-only\">\n    <div class=\"container\">\n        <p class=\"text-muted\" style=\"text-align:center; margin: 0px; width: 100%\">\n            <a href=\"#apps\"> <i class=\"icon-home\"></i> Home </a> |\n            <a href=\"#/forgot-password\"> Forgot password? </a> | \n            <a href=\"#privacy\"> <i class=\"icon-shield\"></i> Privacy Policy </a> |\n            <a href=\"#help\"> <i class=\"icon-question\"></i> Help center </a> |\n            <a href=\"#document\"> <i class=\"icon-doc\"></i> Document </a> |\n            <a href=\"#/resources\"> <i class=\"icon-briefcase\"></i> Resoures </a> |\n            <a href=\"#/blogs\"> <i class=\"icon-book-open\"></i> Blogs </a> |\n            <a href=\"#/contact\"> <i class=\"icon-envelope-letter\">\n                </i> Contact \n            </a> | &copy; CoreSDK 2018\n        </p>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/shared/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-footer {\n  margin: 0px;\n  position: fixed;\n  padding: 0px;\n  width: 100%;\n  bottom: 0px; }\n"

/***/ }),

/***/ "./src/app/shared/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/shared/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n    <button class=\"navbar-toggler mobile-sidebar-toggler d-lg-none mr-auto\" type=\"button\">\n        <span class=\"icon-menu nav-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/groups']\"></a>\n    <ul class=\"nav navbar-nav ml-auto\">\n        <li class=\"nav-item dropdown\" dropdown>\n            <a href class=\"nav-link dropdown-toggle\" dropdownToggle (click)=\"false\">\n                <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\">\n                <span class=\"hidden-md-down\">{{fullname}}</span>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\" style=\"position: absolute;\">\n                <div class=\"dropdown-header text-center\">\n                    <strong>Account</strong>\n                </div>\n                <a *ngIf=\"service.checkpermission('user') || service.checkpermission('role') || service.checkpermission('permission')\" class=\"dropdown-item tpointer\" routerLinkActive=\"active\" [routerLink]=\"['/settings/admin/user']\"><i class=\"icon-lock\"></i> Change Permission</a>\n                <a class=\"dropdown-item tpointer\" (click)=\"forgotPassword()\"><i class=\"icon-lock\"></i> Change password</a>\n                <a class=\"dropdown-item tpointer\" (click)=\"logout()\"><i class=\"icon-logout\"></i> Logout</a>\n            </div>\n        </li>\n        <li class=\"nav-item hidden-md-down\">\n        </li>\n    </ul>\n</header>"

/***/ }),

/***/ "./src/app/shared/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(service) {
        this.service = service;
        this.fullname = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.fullname = this.service.getFullName();
        this.getApps();
    };
    HeaderComponent.prototype.forgotPassword = function () {
        this.service.moveToForgotPassword();
    };
    HeaderComponent.prototype.logout = function () {
        this.service.logout();
    };
    HeaderComponent.prototype.getApps = function () {
        this.appId = this.service.getAppId();
    };
    HeaderComponent.prototype.onItemClick = function (app) {
        this.service.moveToAppDetail(app.app_id);
        this.appId = app.app_id;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header.component.html")
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/nav-dropdown.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/nav-dropdown.directive.ts ***!
  \**************************************************/
/*! exports provided: NavDropdownDirective, NavDropdownToggleDirective, NAV_DROPDOWN_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdownDirective", function() { return NavDropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdownToggleDirective", function() { return NavDropdownToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_DROPDOWN_DIRECTIVES", function() { return NAV_DROPDOWN_DIRECTIVES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavDropdownDirective = /** @class */ (function () {
    function NavDropdownDirective() {
        this._open = false;
    }
    /**
    * Checks if the dropdown menu is open or not.
    */
    NavDropdownDirective.prototype.isOpen = function () { return this._open; };
    /**
    * Opens the dropdown menu.
    */
    NavDropdownDirective.prototype.open = function () {
        this._open = true;
    };
    /**
    * Closes the dropdown menu .
    */
    NavDropdownDirective.prototype.close = function () {
        this._open = false;
    };
    /**
    * Toggles the dropdown menu.
    */
    NavDropdownDirective.prototype.toggle = function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    NavDropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '.nav-dropdown',
            host: {
                '[class.open]': '_open',
            }
        })
    ], NavDropdownDirective);
    return NavDropdownDirective;
}());

/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = /** @class */ (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
    NavDropdownToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '.nav-dropdown-toggle',
        }),
        __metadata("design:paramtypes", [NavDropdownDirective])
    ], NavDropdownToggleDirective);
    return NavDropdownToggleDirective;
}());

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
// export const NGB_DROPDOWN_DIRECTIVES = [NgbDropdownToggle, NgbDropdown];


/***/ }),

/***/ "./src/app/shared/sidebar.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/sidebar.directive.ts ***!
  \*********************************************/
/*! exports provided: SidebarToggleDirective, MobileSidebarToggleDirective, SidebarOffCanvasCloseDirective, SIDEBAR_TOGGLE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return SidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarToggleDirective", function() { return MobileSidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarOffCanvasCloseDirective", function() { return SidebarOffCanvasCloseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_TOGGLE_DIRECTIVES", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '.sidebar-toggler',
        }),
        __metadata("design:paramtypes", [])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());

var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    //Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '.mobile-sidebar-toggler',
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    //Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    //Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '.sidebar-close',
        }),
        __metadata("design:paramtypes", [])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [SidebarToggleDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective];


/***/ }),

/***/ "./src/app/user/forgotpassword.component.html":
/*!****************************************************!*\
  !*** ./src/app/user/forgotpassword.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-4\">\n                <div class=\"card-group mb-0\">\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            <p align=\"center\" class=\"card-title\"> <strong>RECOVER PASSWORD</strong></p>\n                            <img src=\"../assets/img/logo.png\"\n                            style=\"height: 64px; margin-left: auto; margin-right: auto; display: block;\">\n                        </div>\n                        <div class=\"card-block\">\n                            <p class=\"text-muted\" align=\"center\">\n                                No worries, Just type in your account's email and we will send a recovery link straight to your inbox\n                            </p>\n                            <div class=\"input-group mb-1\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-envelope-o\"></i></span>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n                            </div>\n                            <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"clicked()\">\n                            Send me a recover link\n                            </button>\n                        </div>\n                        <div class=\"card-footer\">\n                            <p align=\"center\">\n                                <a href=\"#/login\">\n                                    Back to Login\n                                </a>\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/forgotpassword.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user/forgotpassword.component.ts ***!
  \**************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(service) {
        this.service = service;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.clicked = function () {
        this.login();
    };
    ForgotPasswordComponent.prototype.login = function () {
        this.service.moveToLogin();
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/user/forgotpassword.component.html")
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/login.component.html":
/*!*******************************************!*\
  !*** ./src/app/user/login.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-8\">\n                <div class=\"card-group mb-0\">\n                    <div class=\"card p-2\">\n                        <div class=\"card-block\" (keydown)=\"keyDownFunction($event)\">\n                            <img src=\"../assets/img/logo.png\"\n                            style=\"height: 64px; margin-left: auto; margin-right: auto; display: block;\">\n                            <p class=\"text-muted\" align=\"center\"></p>\n                            <div class=\"input-group mb-1\">\n                                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"model.username\">\n                            </div>\n                            <div class=\"input-group mb-2\">\n                                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" \n                                    [(ngModel)]=\"model.password\">\n                            </div>\n                            <button type=\"button\" class=\"btn btn-primary px-2 btn-block\" (click)=\"clicked()\">Login</button>\n                        </div>\n                    </div>\n                    <div class=\"card card-inverse card-primary py-3 hidden-md-down\" style=\"width:44%\">\n                        <div class=\"card-block text-center\">\n                            <div>\n                                <h2>Sign up</h2>\n                                <p>CoreSDK is the world's leading mobile attribution & marketing analytics platform, helping app marketers around the world make better decisions.</p>\n                                <button type=\"button\" class=\"btn btn-primary active mt-1\" routerLinkActive=\"active\" [routerLink]=\"['/register']\">Register Now!</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/user/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(service) {
        this.service = service;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (!this.service.isExpired()) {
            this.service.moveToApps();
        }
    };
    LoginComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.clicked();
        }
    };
    LoginComponent.prototype.clicked = function () {
        this.service.login({
            'username': this.model.username,
            'password': this.model.password
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login.component.html")
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/register.component.html":
/*!**********************************************!*\
  !*** ./src/app/user/register.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-6\">\n                <div class=\"card mx-2\">\n                    <div class=\"card-block p-2\">\n                        <img src=\"../assets/img/logo.png\" style=\"height: 64px; margin-left: auto; margin-right: auto; display: block;\">\n                        <h2 align=\"center\">CoreSDK</h2>\n                        <p class=\"text-muted\" align=\"center\">Create your account. It's free and always will be.\n                            <a href=\"\">Learn more</a>\n                        </p>\n                        <div class=\"input-group mb-1\">\n                            <span class=\"input-group-addon\"><i class=\"icon-user\"></i>\n                            </span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"model.username\">\n                        </div>\n                        <div class=\"input-group mb-1\">\n                            <span class=\"input-group-addon\">@</span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Email address\" [(ngModel)]=\"model.email\">\n                        </div>\n                        <div class=\"input-group mb-1\">\n                            <span class=\"input-group-addon\"><i class=\"icon-lock-open\"></i>\n                            </span>\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"model.password\">\n                        </div>\n                        <div class=\"input-group mb-2\">\n                            <span class=\"input-group-addon\"><i class=\"icon-lock\"></i>\n                            </span>\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm password\" [(ngModel)]=\"model.repassword\">\n                        </div>\n                        <button type=\"button\" class=\"btn btn-block btn-success\" (click)=\"register()\">Create an account</button>\n                        <p align=\"center\">\n                            <a href=\"#/login\">\n                                    Back to Login\n                                </a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/register.component.ts":
/*!********************************************!*\
  !*** ./src/app/user/register.component.ts ***!
  \********************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service) {
        this.service = service;
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.service.register({
            'username': this.model.username,
            'password': this.model.password,
            'fullname': this.model.username,
            'email': this.model.email
        }, function (data) {
            if (data && data._id) {
                _this.service.moveToLogin();
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/user/register.component.html")
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map