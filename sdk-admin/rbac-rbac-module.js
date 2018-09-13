(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rbac-rbac-module"],{

/***/ "./src/app/rbac/permission/permission.component.html":
/*!***********************************************************!*\
  !*** ./src/app/rbac/permission/permission.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card-block rx-floathide-form\" [hidden]=\"isHidden\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n               <h5 class=\"card-title\" [hidden]=\"!isEdit\">Edit Permission {{onerow.name}}</h5>\n            </div>\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Permission Name</label>\n                        <input class=\"form-control\"  placeholder=\"App Id\" type=\"text\" [(ngModel)]=\"onerow.name\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Permission Description</label>\n                        <input class=\"form-control\"  placeholder=\"Agency Id\" type=\"text\" [(ngModel)]=\"onerow.desc\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-sm btn-primary\" (click)=(update(onerow)) [hidden]=\"!isEdit\"><i class=\"icon-check\"></i> Save</button>\n                <button class=\"btn btn-sm btn-secondary tright\" (click)=\"refresh()\"><i class=\"icon-close\"></i> Cancel</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-4\">\n                    <h5 class=\"card-title\">Permission</h5>\n                </div>\n                <div class=\"col-md-8 col-lg-8\">\n                    <div class=\"btn-group tright\" dropdown>\n                        <button class=\"btn btn-sm btn-primary\" (click)=\"genPermission()\">  GenPermission </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"card-tools\">\n                <select class=\"sel-search\" [(ngModel)]=\"search.field\">\n                    <option *ngFor=\"let perheader of headers\" [hidden]=\"!perheader.is_search\" value=\"{{perheader.id}}\">{{perheader.name}}</option>\n                </select><i class=\"icon-arrow-down sel-ico\"></i>\n                <input type=\"text\" class=\"rx-cur input-search\" [(ngModel)]=\"search.term\">\n                <button class=\"btn btn-sm btn-default btn-search\" (click)=\"jumpPage(1)\"><i class=\"icon-magnifier\"></i></button>\n            </div>\n            <table class=\"table mb-0 table-striped table-responsive-sm table-bordered\">\n                <thead class=\"thead-inverse\">\n                    <tr>\n                        <th *ngFor=\"let perheader of headers\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}} text-center\">\n                            {{perheader.name}}\n                        </th>\n                        <th class=\"text-center\">#</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let cp of permissions\">\n                        <td> {{cp.id}}</td>\n                        <td> {{cp.name}} </td>\n                        <td> {{cp.desc}} </td>\n                        <td> {{cp.controller}}</td>\n                        <td> {{cp.action}}</td>\n                        <td> {{cp.method}}</td>\n                        <td align=\"center\" class=\"text-center\">\n                            <div>{{cp.created_at * 1000 | date:'dd/MM/yyyy'}}</div>\n                        </td>\n                        <td align=\"center\" class=\"text-center\">\n                            <span class=\"tag tag-success\" [hidden]=\"!(cp.is_active || 0)\">Active</span>\n                            <span class=\"tag tag-default\" [hidden]=\"(cp.is_active || 0)\">Inactive</span>\n                        </td>\n                        <td class=\"text-center\">\n                            <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"onEdit($event, cp)\">\n                            <i class=\"fa fa-pencil-square-o\"></i>\n                            </button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"100% \" class=\"rx-pagin\">\n                            <button class=\"rx-back \" [disabled]=\"paging.pg_page <=1 \" (click)=\"jumpPage(paging.pg_page - 1) \">\n                            <</button>\n                            <input type=\"number \" class=\"rx-cur \" [(ngModel)]=\"paging.pg_page \">\n                            <button class=\"rx-next \" [disabled]=\"!isnext \" (click)=\"jumpPage(paging.pg_page + 1) \">></button>\n                            <span class=\"rx-jump \" (click)=\"jumpPage(paging.pg_page) \"><i class=\"icon-rocket \"></i></span>\n                            <select type=\"number \" class=\"rx-pg-size \" (ngModelChange)=\"resizePage($event) \" [(ngModel)]=\"paging.pg_size \">\n                                <option value=\"10 \" selected>10</option>\n                                <option value=\"50 \" selected>50</option>\n                                <option value=\"100 \" selected>100</option>\n                            </select> / page\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/rbac/permission/permission.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/rbac/permission/permission.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-form-label-none {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/rbac/permission/permission.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/rbac/permission/permission.component.ts ***!
  \*********************************************************/
/*! exports provided: PermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionComponent", function() { return PermissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/base.component */ "./src/app/service/base.component.ts");
/* harmony import */ var _service_rbac_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/rbac.service */ "./src/app/service/rbac.service.ts");
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



var PermissionComponent = /** @class */ (function (_super) {
    __extends(PermissionComponent, _super);
    function PermissionComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.isnext = true;
        _this.search = { field: 'name', term: '' };
        _this.permissions = [];
        _this.sources = [];
        _this.paging = _this.service.defaultPaging('id');
        _this.headers = [
            { id: 'id', name: 'Id', st_col: 'id', st_type: 1 },
            { id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
            { id: 'desc', name: 'Description', is_search: 1, st_col: 'desc', st_type: 1 },
            { id: 'controller', name: 'Controller', is_search: 1, st_col: 'controller', st_type: 1 },
            { id: 'action', name: 'Action', is_search: 1, st_col: 'action', st_type: 1 },
            { id: 'method', name: 'Method', is_search: 1, st_col: 'method', st_type: 1 },
            { id: 'created_at', name: 'Created', st_col: 'created_at', st_type: 1 },
            { id: 'is_active', name: 'Status', st_col: 'is_active', st_type: 1 }
        ];
        _this.refresh();
        return _this;
    }
    PermissionComponent.prototype.ngOnInit = function () {
    };
    PermissionComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.refresh();
    };
    PermissionComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    PermissionComponent.prototype.refresh = function () {
        this.reset();
        this.getPermissions();
    };
    PermissionComponent.prototype.reset = function () {
        this.permissions = [];
        this.isHidden = true;
        this.isEdit = false;
        this.onerow = {
            'name': '',
            'desc': '',
            'is_active': 1
        };
    };
    PermissionComponent.prototype.getPermissions = function () {
        var _this = this;
        this.service.getPermissions((_a = {
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size
            },
            _a['search_' + this.search.field] = this.search.term,
            _a), function (data) {
            _this.permissions = data;
            _this.isnext = (data.length >= _this.paging.pg_size) ? true : false;
        });
        var _a;
    };
    PermissionComponent.prototype.genPermission = function () {
        var _this = this;
        this.service.genPermissions({}, function (data) {
            _this.refresh();
        });
    };
    PermissionComponent.prototype.sort = function ($event) {
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
            this.refresh();
        }
    };
    PermissionComponent.prototype.onEdit = function (e, cp) {
        e.stopPropagation();
        this.onerow = cp;
        this.isEdit = true;
        this.isHidden = false;
    };
    PermissionComponent.prototype.update = function (permission) {
        var _this = this;
        this.service.updatePermission(permission, function (data) { _this.refresh(); });
    };
    PermissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permission',
            template: __webpack_require__(/*! ./permission.component.html */ "./src/app/rbac/permission/permission.component.html"),
            styles: [__webpack_require__(/*! ./permission.component.scss */ "./src/app/rbac/permission/permission.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_rbac_service__WEBPACK_IMPORTED_MODULE_2__["RbacService"]])
    ], PermissionComponent);
    return PermissionComponent;
}(_service_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/rbac/rbac-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/rbac/rbac-routing.module.ts ***!
  \*********************************************/
/*! exports provided: RbacRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RbacRoutingModule", function() { return RbacRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.component */ "./src/app/rbac/user/user.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role/role.component */ "./src/app/rbac/role/role.component.ts");
/* harmony import */ var _permission_permission_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permission/permission.component */ "./src/app/rbac/permission/permission.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]
    },
    {
        path: 'role',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_3__["RoleComponent"]
    },
    {
        path: 'permission',
        component: _permission_permission_component__WEBPACK_IMPORTED_MODULE_4__["PermissionComponent"]
    }
];
var RbacRoutingModule = /** @class */ (function () {
    function RbacRoutingModule() {
    }
    RbacRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RbacRoutingModule);
    return RbacRoutingModule;
}());



/***/ }),

/***/ "./src/app/rbac/rbac.module.ts":
/*!*************************************!*\
  !*** ./src/app/rbac/rbac.module.ts ***!
  \*************************************/
/*! exports provided: RbacModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RbacModule", function() { return RbacModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var _rbac_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rbac-routing.module */ "./src/app/rbac/rbac-routing.module.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.component */ "./src/app/rbac/user/user.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./role/role.component */ "./src/app/rbac/role/role.component.ts");
/* harmony import */ var _permission_permission_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./permission/permission.component */ "./src/app/rbac/permission/permission.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Ngx Module






var RbacModule = /** @class */ (function () {
    function RbacModule() {
    }
    RbacModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _rbac_routing_module__WEBPACK_IMPORTED_MODULE_4__["RbacRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_3__["AmChartsModule"]
            ],
            declarations: [
                _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"], _role_role_component__WEBPACK_IMPORTED_MODULE_9__["RoleComponent"], _permission_permission_component__WEBPACK_IMPORTED_MODULE_10__["PermissionComponent"]
            ]
        })
    ], RbacModule);
    return RbacModule;
}());



/***/ }),

/***/ "./src/app/rbac/role/role.component.html":
/*!***********************************************!*\
  !*** ./src/app/rbac/role/role.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card-block lk-floathide-form\" [hidden]=\"isHidden\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n              <h5 class=\"card-title\" [hidden]=\"isEdit\">Create Role</h5>\n              <h5 class=\"card-title\" [hidden]=\"!isEdit\">Edit Role {{onerow.name}}</h5>\n            </div>\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Role Name</label>\n                        <input class=\"form-control\"  placeholder=\"Role Name\" type=\"text\" [(ngModel)]=\"onerow.name\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Role Code</label>\n                        <input class=\"form-control\"  placeholder=\"Role Code\" type=\"text\" [(ngModel)]=\"onerow.code\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Role Description</label>\n                        <input class=\"form-control\"  placeholder=\"Role Description\" type=\"text\" [(ngModel)]=\"onerow.desc\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-md-3 col-lg-3\">\n                    <button class=\"btn btn-default\" type=\"submit\" (click)=\"addPermission()\" [hidden]=\"!onerow.id\">Sửa chi tiết vai trò</button>\n                    <button class=\"btn btn-default\" type=\"submit\" (click)=\"addPermission()\" [hidden]=\"onerow.id\">Thêm chi tiết vai trò</button>\n                  </div>\n                </div>\n\n                <div class=\"row\" [hidden]=\"!(showselected_array && showselected_array.length > 0)\">\n                  <div class=\"rx-permission-show\">          \n                    <div class=\"rx-permission-group clearfix\" *ngFor=\"let permissiongroup of showselected_array\" >            \n                      <b>{{permissiongroup.key}}</b>\n                      <div><span *ngFor=\"let permission of permissiongroup.value\" class=\"rx-permission-perele\">{{permission.action}}</span></div>\n                    </div>\n                  </div> \n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-sm btn-primary\" (click)=(save()) [hidden]=\"isEdit\"><i class=\"icon-plus\"></i> Create </button>\n                <button class=\"btn btn-sm btn-primary\" (click)=(update(onerow)) [hidden]=\"!isEdit\"><i class=\"icon-check\"></i> Save</button>\n                <button class=\"btn btn-sm btn-secondary tright\" (click)=\"refresh()\"><i class=\"icon-close\"></i> Cancel</button>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"card\" [hidden]=\"!isPermission\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-4\">\n                    <h5 class=\"card-title\">Edit Permission</h5>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"row\">\n              <div class=\"col-lg-4 col-xs-6 rs-box-group\" *ngFor=\"let perdata of permission_array\" >\n                \n                <div class=\"rs-checkbox-group\">\n                  <div class=\"rs-checkbox-group-name\" >\n                           \n                  <span class=\"rs-checkbox-group-all\" [ngClass]=\"(checkedAll(perdata))?'lk_checkall': checkedExist(perdata) ? 'lk_checkexist':''\" (click)=\"toggleAll(perdata)\"></span> \n\n                  <span class=\"rs-checkbox-group-nametext\"><b>{{perdata.key}}</b></span></div>\n                    <div class=\"rs-checkbox-group-body\" >\n                    <div *ngFor=\"let permission of perdata.value\">\n                      <input type=\"checkbox\" class=\"rx-checkbox-iteminput\" (ngModelChange)=\"toggleOne(permission,!permission.checked)\" [(ngModel)]=\"permission.checked\"> <span>{{permission.action}}</span>\n                    </div>\n                    </div>\n                </div>\n\n              </div>\n            </div>\n\n            <div>\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"addSavePermission()\" ><i class=\"fa fa-dot-circle-o\"></i> Cập nhật</button>        \n              <button class=\"btn btn-sm btn-danger\" type=\"reset\" (click)=\"addResetPermission()\"><i class=\"fa fa-ban\"></i> Huỷ bỏ</button>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"card\" [hidden]=\"isPermission || !isHidden\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-4\">\n                    <h5 class=\"card-title\">Role</h5>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"card-tools\">\n                <select class=\"sel-search\" [(ngModel)]=\"search.field\">\n                    <option *ngFor=\"let perheader of headers\" [hidden]=\"!perheader.is_search\" value=\"{{perheader.id}}\">{{perheader.name}}</option>\n                </select><i class=\"icon-arrow-down sel-ico\"></i>\n                <input type=\"text\" class=\"rx-cur input-search\" [(ngModel)]=\"search.term\">\n                <button class=\"btn btn-sm btn-default btn-search\" (click)=\"jumpPage(1)\"><i class=\"icon-magnifier\"></i></button>\n                <button class=\"btn btn-sm btn-success\" (click)=\"show()\"> <i class=\"icon-plus\"></i> Create </button>\n            </div>\n            <table class=\"table mb-0 table-striped table-responsive-sm table-bordered\">\n                <thead class=\"thead-inverse\">\n                    <tr>\n                        <th *ngFor=\"let perheader of headers\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}} text-center\">\n                            {{perheader.name}}\n                        </th>\n                        <th class=\"text-center\">#</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let cp of roles\">\n                        <td> {{cp.name}} </td>\n                        <td> {{cp.desc}} </td>\n                        <td> {{cp.code}} </td>\n                        <td align=\"center\" class=\"text-center\">\n                            <div>{{cp.created_at * 1000 | date:'dd/MM/yyyy'}}</div>\n                        </td>\n                        <td align=\"center\" class=\"text-center\">\n                            <span class=\"tag tag-success\" [hidden]=\"!(cp.is_active || 0)\">Active</span>\n                            <span class=\"tag tag-default\" [hidden]=\"(cp.is_active || 0)\">Inactive</span>\n                        </td>\n                        <td class=\"text-center\">\n                            <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"onEdit($event, cp)\">\n                            <i class=\"fa fa-pencil-square-o\"></i>\n                            </button>\n                            <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"delete($event, cp)\">\n                            <i class=\"icon-trash \"></i>\n                            </button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"100% \" class=\"rx-pagin\">\n                            <button class=\"rx-back \" [disabled]=\"paging.pg_page <=1 \" (click)=\"jumpPage(paging.pg_page - 1) \">\n                            <</button>\n                            <input type=\"number \" class=\"rx-cur \" [(ngModel)]=\"paging.pg_page \">\n                            <button class=\"rx-next \" [disabled]=\"!isnext \" (click)=\"jumpPage(paging.pg_page + 1) \">></button>\n                            <span class=\"rx-jump \" (click)=\"jumpPage(paging.pg_page) \"><i class=\"icon-rocket \"></i></span>\n                            <select type=\"number \" class=\"rx-pg-size \" (ngModelChange)=\"resizePage($event) \" [(ngModel)]=\"paging.pg_size \">\n                                <option value=\"10 \" selected>10</option>\n                                <option value=\"50 \" selected>50</option>\n                                <option value=\"100 \" selected>100</option>\n                            </select> / page\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/rbac/role/role.component.scss":
/*!***********************************************!*\
  !*** ./src/app/rbac/role/role.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-form-label-none {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/rbac/role/role.component.ts":
/*!*********************************************!*\
  !*** ./src/app/rbac/role/role.component.ts ***!
  \*********************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/base.component */ "./src/app/service/base.component.ts");
/* harmony import */ var _service_rbac_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/rbac.service */ "./src/app/service/rbac.service.ts");
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



var RoleComponent = /** @class */ (function (_super) {
    __extends(RoleComponent, _super);
    function RoleComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.isnext = true;
        _this.search = { field: 'name', term: '' };
        _this.roles = [];
        _this.selected_array = [];
        _this.showselected_array = [];
        _this.select_tmp_array = [];
        _this.paging = _this.service.defaultPaging('id');
        _this.headers = [
            { id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
            { id: 'desc', name: 'Description', is_search: 1, st_col: 'desc', st_type: 1 },
            { id: 'code', name: 'Code', is_search: 1, st_col: 'code', st_type: 1 },
            { id: 'created_at', name: 'Created', st_col: 'created_at', st_type: 1 },
            { id: 'is_active', name: 'Status', st_col: 'is_active', st_type: 1 }
        ];
        _this.isEdit = false;
        _this.isDelete = false;
        _this.isView = false;
        _this.onerow = {};
        _this.dataopt = { page: [1, 2, 3] };
        _this.refresh();
        _this.getAllPermissions();
        return _this;
    }
    RoleComponent.prototype.ngOnInit = function () {
    };
    RoleComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.refresh();
    };
    RoleComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    RoleComponent.prototype.refresh = function () {
        this.reset();
        this.getRoles();
    };
    RoleComponent.prototype.reset = function () {
        this.roles = [];
        this.isHidden = true;
        this.isEdit = false;
        this.onerow = {
            'name': '',
            'desc': '',
            'is_active': 1
        };
    };
    RoleComponent.prototype.getRoles = function () {
        var _this = this;
        this.service.getRoles((_a = {
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size
            },
            _a['search_' + this.search.field] = this.search.term,
            _a), function (data) {
            _this.roles = data;
            _this.isnext = (data.length >= _this.paging.pg_size) ? true : false;
        });
        var _a;
    };
    RoleComponent.prototype.getAllPermissions = function () {
        var _this = this;
        this.service.getallPermissions({}, function (data) {
            _this.permission_array = [];
            _this.data_permission = data;
            var per_array = _this.groupBy(_this.data_permission);
            var array_parse = _this.parse_obj_toarray(per_array);
            var keys = [];
            for (var key in array_parse) {
                keys.push(array_parse[key]);
            }
            _this.permission_array = keys;
        });
    };
    RoleComponent.prototype.sort = function ($event) {
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
            this.refresh();
        }
    };
    RoleComponent.prototype.update = function (paramrole) {
        var _this = this;
        if (paramrole && paramrole.permission) {
            if (typeof (paramrole.permission) == "string") {
                paramrole.permission = paramrole.permission.split(',');
            }
            paramrole.permission = paramrole.permission.map(Number);
        }
        this.service.updateRole(paramrole, function (data) { _this.refresh(); });
    };
    RoleComponent.prototype.delete = function (e, cp) {
        var _this = this;
        e.stopPropagation();
        this.service.deleteRole({ 'id': cp._id }, function (data) { _this.refresh(); });
    };
    // View 
    RoleComponent.prototype.detail = function (event) {
        this.isView = true;
        this.onerow = event;
        var init_per = this.initialPermission();
        this.show_permission(init_per);
    };
    RoleComponent.prototype.show = function () {
        this.isHidden = false;
        this.isEdit = false;
        this.selected_array = [];
        this.showselected_array = [];
    };
    RoleComponent.prototype.onEdit = function (e, cp) {
        e.stopPropagation();
        this.onerow = cp;
        this.isEdit = true;
        this.isHidden = false;
        var init_per = this.initialPermission();
        this.checkPermission(init_per);
        this.show_permission(init_per);
    };
    RoleComponent.prototype.editCancel = function (event) {
        this.resetState();
    };
    RoleComponent.prototype.editSubmit = function () {
        var _this = this;
        var tempparams = [];
        tempparams['id'] = this.onerow.id;
        tempparams['name'] = this.onerow.name;
        tempparams['desc'] = this.onerow.desc;
        tempparams['code'] = this.onerow.code;
        tempparams['permission'] = this.onerow.permission;
        this.connect.request('post', this.config.api_roleupdate, tempparams, function (data) {
            if (data.success == 1) {
                _this.refresh();
                _this.resetState();
            }
        });
    };
    RoleComponent.prototype.addCancel = function () {
        this.resetState();
    };
    RoleComponent.prototype.addResetPermission = function () {
        this.getAllPermissions();
        this.selected_array = this.initialPermission();
        this.show_permission(this.selected_array);
        this.isPermission = false;
        this.isHidden = false;
    };
    RoleComponent.prototype.addClosePermission = function () {
        this.isPermission = false;
        this.isHidden = false;
    };
    RoleComponent.prototype.addSavePermission = function () {
        this.show_permission(this.selected_array);
        this.onerow.permission = this.selected_array;
        this.isPermission = false;
        this.isHidden = false;
    };
    RoleComponent.prototype.save = function () {
        var _this = this;
        var tempparams = {};
        tempparams['name'] = this.onerow.name;
        tempparams['desc'] = this.onerow.desc;
        tempparams['code'] = this.onerow.code;
        tempparams['permission'] = this.onerow.permission;
        this.service.insertRole(tempparams, function (data) { _this.refresh(); _this.resetState(); });
    };
    RoleComponent.prototype.addMeta = function () {
        if (typeof (this.onerow.info) == 'undefined') {
            this.onerow.info = [];
        }
        var tempObj = { name: '', value: '' };
        this.onerow.info.push(tempObj);
    };
    RoleComponent.prototype.addPermission = function () {
        this.isPermission = true;
        this.isHidden = true;
        this.checkPermission(this.selected_array);
    };
    ///////////////////
    // H E L P E R S //
    ///////////////////
    RoleComponent.prototype.resetState = function () {
        this.isEdit = false;
        this.isView = false;
        this.onerow = {};
    };
    RoleComponent.prototype.checkedExist = function (data) {
        var arrchecked = data.value.map(function (x) { return x.checked; });
        if (arrchecked.indexOf(true) === -1) {
            return false;
        }
        else {
            return true;
        }
    };
    RoleComponent.prototype.checkedAll = function (data) {
        var check_list = true;
        for (var key in data.value) {
            if (data.value[key].checked != true) {
                check_list = check_list && false;
            }
            else {
                check_list = check_list && true;
            }
        }
        return check_list;
    };
    RoleComponent.prototype.toggleAll = function (data) {
        if (this.checkedAll(data)) {
            for (var key in data.value) {
                var index = this.selected_array.indexOf(data.value[key].id);
                this.selected_array.splice(index, 1);
                data.value[key].checked = false;
            }
        }
        else {
            for (var key in data.value) {
                if (this.selected_array.indexOf(data.value[key].id) === -1) {
                    this.selected_array.push(data.value[key].id);
                    data.value[key].checked = true;
                }
            }
        }
    };
    RoleComponent.prototype.toggleOne = function (data, checked) {
        if (this.selected_array.indexOf(data.id) === -1) {
            if (checked) {
                this.selected_array.push(data.id);
            }
        }
        else {
            if (!checked) {
                var index = this.selected_array.indexOf(data.id);
                this.selected_array.splice(index, 1);
            }
        }
    };
    RoleComponent.prototype.parse_obj_toarray = function (value) {
        if (!value) {
            return value;
        }
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: (value[key]) });
        }
        return keys;
    };
    RoleComponent.prototype.groupBy = function (permissionArr) {
        var groups = {};
        permissionArr.forEach(function (permission) {
            permission.checked = false;
            groups[permission.controller] = groups[permission.controller] || [];
            groups[permission.controller].push(permission);
        });
        return groups;
    };
    RoleComponent.prototype.initialPermission = function () {
        if (this.onerow.permission != null) {
            var str = this.onerow.permission.replace("[", "").replace("]", "");
            var array = str.split(",").map(Number);
            this.selected_array = array;
            return this.selected_array;
        }
        else {
            return this.selected_array = [];
        }
    };
    RoleComponent.prototype.show_permission = function (data) {
        var dataper_selected = [];
        for (var key_per in this.data_permission) {
            if (data.indexOf(this.data_permission[key_per].id) !== -1) {
                dataper_selected.push(this.data_permission[key_per]);
            }
        }
        var dataper_tmp = this.groupBy(dataper_selected);
        this.showselected_array = this.parse_obj_toarray(dataper_tmp);
        return this.showselected_array;
    };
    RoleComponent.prototype.checkPermission = function (permission_checked) {
        if (permission_checked != null) {
            for (var key_per in this.data_permission) {
                if (permission_checked.indexOf(this.data_permission[key_per].id) !== -1) {
                    this.data_permission[key_per].checked = true;
                }
            }
        }
        return this.data_permission;
    };
    RoleComponent.prototype.confirmSubmit = function () {
        var _this = this;
        this.pagin.id = this.onerow.id;
        this.connect.request('get', this.config.api_roledel, this.pagin, function (data) {
            if (data.success == 1) {
                _this.refresh();
            }
        });
        this.isDelete = false;
    };
    RoleComponent.prototype.confirmCancel = function () {
        this.isDelete = false;
        this.isEdit = false;
        this.isView = false;
        this.onerow = event;
    };
    RoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/rbac/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.scss */ "./src/app/rbac/role/role.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_rbac_service__WEBPACK_IMPORTED_MODULE_2__["RbacService"]])
    ], RoleComponent);
    return RoleComponent;
}(_service_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/rbac/user/user.component.html":
/*!***********************************************!*\
  !*** ./src/app/rbac/user/user.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card-block rx-floathide-form\" [hidden]=\"isHidden\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h5 class=\"card-title\" [hidden]=\"isEdit\">Create User</h5>\n                <h5 class=\"card-title\" [hidden]=\"!isEdit\">Edit User</h5>\n            </div>\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Username</label>\n                        <input class=\"form-control\"  placeholder=\"UserName\" type=\"text\" [disabled]=\"isEdit\" [(ngModel)]=\"onerow.username\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Fullname</label>\n                        <input class=\"form-control\"  placeholder=\"FullName\" type=\"text\" [(ngModel)]=\"onerow.fullname\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Password</label>\n                        <input class=\"form-control\"  placeholder=\"Password\" type=\"password\" [disabled]=\"isEdit\" [(ngModel)]=\"onerow.password\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Email</label>\n                        <input class=\"form-control\" placeholder=\"Email\" type=\"text\" [(ngModel)]=\"onerow.email\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Address</label>\n                        <input class=\"form-control\"  placeholder=\"Address\" type=\"text\" [(ngModel)]=\"onerow.address\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Phone</label>\n                        <input class=\"form-control\" placeholder=\"Phone\" type=\"text\" [(ngModel)]=\"onerow.phone\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Role</label>\n                        <select class=\"form-control\" [(ngModel)]=\"onerow.roleid\">\n                            <option *ngFor=\"let role of roles\" [value]=\"role._id\"> {{role.name}}</option>\n                        </select>\n                    </div>\n                </div>\n                <!-- <div class=\"row\">\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">GroupApp</label>\n                        <div class=\"lk-multi-selectbox-result clearfix form-control\">\n                            <div *ngFor=\"let groupchoose of arrgroupschoose\" >\n                            </div>\n                        </div>\n                        <select class=\"form-control\" (change)=\"onChange($event.target.value)\">\n                            <option *ngFor=\"let group of groups_tmp\" [value]=\"group._id\"> {{group.name}}</option>\n                        </select>\n                    </div>\n                </div> -->\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-sm btn-primary\" (click)=(save(onerow)) [hidden]=\"isEdit\"><i class=\"icon-plus\"></i> Create </button>\n                <button class=\"btn btn-sm btn-primary\" (click)=(update()) [hidden]=\"!isEdit\"><i class=\"icon-check\"></i> Save</button>\n                <button class=\"btn btn-sm btn-secondary tright\" (click)=\"refresh()\"><i class=\"icon-close\"></i> Cancel</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-4\">\n                    <h5 class=\"card-title\">Users</h5>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"card-tools\">\n                <select class=\"sel-search\" [(ngModel)]=\"search.field\">\n                    <option *ngFor=\"let perheader of headers\" [hidden]=\"!perheader.is_search\" value=\"{{perheader.id}}\">{{perheader.name}}</option>\n                </select><i class=\"icon-arrow-down sel-ico\"></i>\n                <input type=\"text\" class=\"rx-cur input-search\" [(ngModel)]=\"search.term\" [value]=\"search.term\">\n                <button class=\"btn btn-sm btn-default btn-search\" (click)=\"jumpPage(1)\"><i class=\"icon-magnifier\"></i></button>\n                <button class=\"btn btn-sm btn-success\" (click)=\"show()\"> <i class=\"icon-plus\"></i> Create </button>\n            </div>\n            <table class=\"table mb-0 table-striped table-responsive-sm table-bordered\">\n                <thead class=\"thead-inverse\">\n                    <tr>\n                        <th *ngFor=\"let perheader of headers\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}} text-center\">\n                            {{perheader.name}}\n                        </th>\n                        <th class=\"text-center\">#</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let cp of users\">\n                        <td> {{cp.username}} </td>\n                        <td> {{cp.fullname}} </td>\n                        <td> {{cp.phone}} </td>\n                        <td> {{cp.email}} </td>\n                        <td> {{cp.address}} </td>\n                        <td align=\"center\" class=\"text-center\">\n                            <div>{{cp.created_at * 1000 | date:'dd/MM/yyyy'}}</div>\n                        </td>\n                        <td align=\"center\" class=\"text-center\">\n                            <span class=\"tag tag-success\" [hidden]=\"!(cp.is_active || 0)\">Active</span>\n                            <span class=\"tag tag-default\" [hidden]=\"(cp.is_active || 0)\">Inactive</span>\n                        </td>\n                        <td class=\"text-center\">\n                            <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"onEdit($event, cp)\">\n                            <i class=\"fa fa-pencil-square-o\"></i>\n                            </button>\n                            <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"delete($event, cp)\">\n                            <i class=\"icon-trash \"></i>\n                            </button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"100% \" class=\"rx-pagin\">\n                            <button class=\"rx-back \" [disabled]=\"paging.pg_page <=1 \" (click)=\"jumpPage(paging.pg_page - 1) \">\n                            <</button>\n                            <input type=\"number \" class=\"rx-cur \" [(ngModel)]=\"paging.pg_page \">\n                            <button class=\"rx-next \" [disabled]=\"!isnext \" (click)=\"jumpPage(paging.pg_page + 1) \">></button>\n                            <span class=\"rx-jump \" (click)=\"jumpPage(paging.pg_page) \"><i class=\"icon-rocket \"></i></span>\n                            <select type=\"number \" class=\"rx-pg-size \" (ngModelChange)=\"resizePage($event) \" [(ngModel)]=\"paging.pg_size \">\n                                <option value=\"10 \" selected>10</option>\n                                <option value=\"50 \" selected>50</option>\n                                <option value=\"100 \" selected>100</option>\n                            </select> / page\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/rbac/user/user.component.scss":
/*!***********************************************!*\
  !*** ./src/app/rbac/user/user.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-form-label-none {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/rbac/user/user.component.ts":
/*!*********************************************!*\
  !*** ./src/app/rbac/user/user.component.ts ***!
  \*********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/base.component */ "./src/app/service/base.component.ts");
/* harmony import */ var _service_rbac_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/rbac.service */ "./src/app/service/rbac.service.ts");
/* harmony import */ var _service_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/group.service */ "./src/app/service/group.service.ts");
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




var UserComponent = /** @class */ (function (_super) {
    __extends(UserComponent, _super);
    function UserComponent(service, gservice) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.gservice = gservice;
        _this.search = { field: 'username', term: '' };
        _this.app = { 'app_id': '', 'os': '', 'version': '' };
        _this.users = [];
        _this.arrgroupschoose = [];
        _this.roles = [];
        _this.paging = _this.service.defaultPaging('created_at');
        _this.isnext = true;
        _this.headers = [
            { id: 'username', name: 'Username', is_search: 1, st_col: 'username', st_type: 1 },
            { id: 'fullname', name: 'Fullname', is_search: 1, st_col: 'fullname', st_type: 1 },
            { id: 'phone', name: 'Phone', is_search: 1, st_col: 'phone', st_type: 1 },
            { id: 'email', name: 'Email', is_search: 1, st_col: 'email', st_type: 1 },
            { id: 'address', name: 'Address', is_search: 1, st_col: 'address', st_type: 1 },
            { id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 },
            { id: 'is_active', name: 'Status', is_search: 1, st_col: 'is_active', st_type: 1 }
        ];
        _this.refresh();
        _this.getRoles();
        _this.getGroups();
        return _this;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.refresh();
    };
    UserComponent.prototype.getGroups = function () {
        var _this = this;
        this.gservice.getGroups({}, function (data) {
            _this.groups = data;
            _this.groups_tmp = _this.groups;
        });
    };
    // getApps() {
    //   this.app.app_id = this.service.getAppId();
    //   this.apps = this.gService.getGroupSetting();
    //   for (var ap of this.apps) {
    //     if (ap.app_id == this.app.app_id) {
    //       this.app.os = ap.os;
    //       this.app.version = ap.version;
    //     }
    //   }
    // }
    UserComponent.prototype.switchApp = function (app) {
        this.service.setAppId(app.app_id);
        this.refresh();
    };
    UserComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    UserComponent.prototype.refresh = function () {
        this.reset();
        this.getUsers();
    };
    UserComponent.prototype.reset = function () {
        this.users = [];
        this.isHidden = true;
        this.isEdit = false;
        this.onerow = {};
    };
    UserComponent.prototype.getRoles = function () {
        var _this = this;
        this.service.getallRoles({}, function (data) {
            _this.roles = data;
            if (_this.roles.length > 0)
                _this.onerow.roleid = _this.roles[0]._id;
        });
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.getUsers((_a = {
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size
            },
            _a['search_' + this.search.field] = this.search.term,
            _a), function (data) {
            _this.users = data;
        });
        var _a;
    };
    UserComponent.prototype.sort = function ($event) {
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
            this.refresh();
        }
    };
    UserComponent.prototype.show = function () {
        this.search = { field: 'fullname', term: '' };
        this.isHidden = false;
        this.isEdit = false;
        if (this.roles && this.roles.length > 0) {
            this.onerow.roleid = this.roles[0]._id;
        }
    };
    UserComponent.prototype.save = function (onerow) {
        var _this = this;
        this.service.insertUser(onerow, function (data) { _this.refresh(); });
    };
    UserComponent.prototype.onEdit = function (e, cp) {
        e.stopPropagation();
        this.onerow = cp;
        this.isEdit = true;
        this.isHidden = false;
        this.search = { field: 'fullname', term: '' };
    };
    UserComponent.prototype.update = function () {
        var _this = this;
        this.service.updateUser(this.onerow, function (data) { _this.refresh(); });
    };
    UserComponent.prototype.delete = function (e, cp) {
        var _this = this;
        e.stopPropagation();
        this.service.deleteUser({ 'id': cp._id }, function (data) { _this.refresh(); });
    };
    // Multi Select Box
    UserComponent.prototype.onChange = function (deviceValue) {
        console.log(this.groups_tmp);
        console.log(deviceValue);
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/rbac/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/rbac/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_rbac_service__WEBPACK_IMPORTED_MODULE_2__["RbacService"], _service_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"]])
    ], UserComponent);
    return UserComponent;
}(_service_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=rbac-rbac-module.js.map