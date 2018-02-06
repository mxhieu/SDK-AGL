import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { FlashMessagesModule } from 'angular2-flash-messages';

// Module
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';

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
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DocumentsComponent } from './document/documents.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HelpComponent } from './help/help.component';
import { ResourceComponent } from './resource/resource.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { RxDateFormatPipe } from './pipe/rx-date-format.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        FlashMessagesModule,
        BsDropdownModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TabsModule.forRoot()
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
        NAV_DROPDOWN_DIRECTIVES,
        SIDEBAR_TOGGLE_DIRECTIVES,
        AsideToggleDirective,
        LoginComponent,
        FooterComponent,
        p404Component,
        p500Component,
        RegisterComponent,
        AppsComponent,
        HeaderComponent,
        ContactComponent,
        BlogsComponent,
        DocumentsComponent,
        PrivacyComponent,
        HelpComponent,
        ResourceComponent,
        ForgotPasswordComponent,
        RxDateFormatPipe
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
