"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var full_layout_component_1 = require("./dashboard/full-layout.component");
var login_component_1 = require("./user/login.component");
var register_component_1 = require("./user/register.component");
var _404_component_1 = require("./shared/404.component");
var apps_component_1 = require("./apps/apps.component");
var widgets_component_1 = require("./widgets/widgets.component");
var contact_component_1 = require("./contact/contact.component");
var blogs_component_1 = require("./blogs/blogs.component");
var documents_component_1 = require("./document/documents.component");
var privacy_component_1 = require("./privacy/privacy.component");
var help_component_1 = require("./help/help.component");
var resource_component_1 = require("./resource/resource.component");
var forgotpassword_component_1 = require("./forgotpassword/forgotpassword.component");
exports.routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'apps',
        component: apps_component_1.AppsComponent
    },
    {
        path: 'widgets',
        component: widgets_component_1.WidgetsComponent
    },
    {
        path: 'apps',
        component: full_layout_component_1.FullLayoutComponent,
        children: [
            {
                path: 'admin',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            },
            {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            },
            {
                path: 'charts',
                loadChildren: './chartjs/chartjs.module#ChartJSModule'
            }
        ]
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'blogs',
        component: blogs_component_1.BlogsComponent
    },
    {
        path: 'document',
        component: documents_component_1.DocumentsComponent
    },
    {
        path: 'privacy',
        component: privacy_component_1.PrivacyComponent
    },
    {
        path: 'help',
        component: help_component_1.HelpComponent
    },
    {
        path: 'resources',
        component: resource_component_1.ResourceComponent
    },
    {
        path: 'forgot-password',
        component: forgotpassword_component_1.ForgotPasswordComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _404_component_1.p404Component
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(exports.routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/app.routing.js.map