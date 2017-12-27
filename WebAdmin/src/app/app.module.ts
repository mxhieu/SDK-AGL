import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';
import { PrivateService } from './service/service.private';
import { ConfigService } from './service/service.config';
import { Service } from './service/service';
import { RoutingService } from './service/routing.service';

// Layouts
import { FullLayoutComponent } from './dashboard/full-layout.component';
import { LoginComponent } from './user/login.component';
import { FooterComponent } from './shared/footer.component';
import { p404Component } from './shared/404.component';
import { p500Component } from './shared/500.component';
import { RegisterComponent } from './user/register.component';
import { AppsComponent } from './apps/apps.component';
import { HeaderComponent } from './shared/header.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DocumentsComponent } from './document/documents.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HelpComponent } from './help/help.component';
import { ResourceComponent } from './resource/resource.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        DropdownModule.forRoot(),
        TabsModule.forRoot(),
        ChartsModule,
        HttpModule,
        FlashMessagesModule
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
        NAV_DROPDOWN_DIRECTIVES,
        BreadcrumbsComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        AsideToggleDirective,
        LoginComponent,
        FooterComponent,
        p404Component,
        p500Component,
        RegisterComponent,
        AppsComponent,
        HeaderComponent,
        WidgetsComponent,
        ContactComponent,
        BlogsComponent,
        DocumentsComponent,
        PrivacyComponent,
        HelpComponent,
        ResourceComponent,
        ForgotPasswordComponent,
    ],
    providers: [
        ConfigService,
        Service,
        RoutingService,
        PrivateService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
