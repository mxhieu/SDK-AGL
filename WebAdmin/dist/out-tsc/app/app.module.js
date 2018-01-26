"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var dropdown_1 = require("ng2-bootstrap/dropdown");
var tabs_1 = require("ng2-bootstrap/tabs");
var nav_dropdown_directive_1 = require("./shared/nav-dropdown.directive");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var angular2_flash_messages_1 = require("angular2-flash-messages");
var sidebar_directive_1 = require("./shared/sidebar.directive");
var aside_directive_1 = require("./shared/aside.directive");
var breadcrumb_component_1 = require("./shared/breadcrumb.component");
// Routing Module
var app_routing_1 = require("./app.routing");
var service_private_1 = require("./service/service.private");
var service_config_1 = require("./service/service.config");
var service_1 = require("./service/service");
var routing_service_1 = require("./service/routing.service");
// Layouts
var full_layout_component_1 = require("./dashboard/full-layout.component");
var login_component_1 = require("./user/login.component");
var footer_component_1 = require("./shared/footer.component");
var _404_component_1 = require("./shared/404.component");
var _500_component_1 = require("./shared/500.component");
var register_component_1 = require("./user/register.component");
var apps_component_1 = require("./apps/apps.component");
var header_component_1 = require("./shared/header.component");
var widgets_component_1 = require("./widgets/widgets.component");
var contact_component_1 = require("./contact/contact.component");
var blogs_component_1 = require("./blogs/blogs.component");
var documents_component_1 = require("./document/documents.component");
var privacy_component_1 = require("./privacy/privacy.component");
var help_component_1 = require("./help/help.component");
var resource_component_1 = require("./resource/resource.component");
var forgotpassword_component_1 = require("./forgotpassword/forgotpassword.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.AppRoutingModule,
                dropdown_1.DropdownModule.forRoot(),
                tabs_1.TabsModule.forRoot(),
                ng2_charts_1.ChartsModule,
                http_1.HttpModule,
                angular2_flash_messages_1.FlashMessagesModule
            ],
            declarations: [
                app_component_1.AppComponent,
                full_layout_component_1.FullLayoutComponent,
                nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
                breadcrumb_component_1.BreadcrumbsComponent,
                sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
                aside_directive_1.AsideToggleDirective,
                login_component_1.LoginComponent,
                footer_component_1.FooterComponent,
                _404_component_1.p404Component,
                _500_component_1.p500Component,
                register_component_1.RegisterComponent,
                apps_component_1.AppsComponent,
                header_component_1.HeaderComponent,
                widgets_component_1.WidgetsComponent,
                contact_component_1.ContactComponent,
                blogs_component_1.BlogsComponent,
                documents_component_1.DocumentsComponent,
                privacy_component_1.PrivacyComponent,
                help_component_1.HelpComponent,
                resource_component_1.ResourceComponent,
                forgotpassword_component_1.ForgotPasswordComponent
            ],
            providers: [
                service_config_1.ConfigService,
                service_1.Service,
                routing_service_1.RoutingService,
                service_private_1.PrivateService,
                {
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=/Volumes/DATA/PROJECT/Ecdc/SDK/sdk-admin/WebAdmin/src/app/app.module.js.map