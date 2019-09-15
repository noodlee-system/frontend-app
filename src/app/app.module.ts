import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './components';
import { AuthenticationService } from './services';
import { AuthenticationGuard } from './guards/authentication.guard';
import { LoginModule } from './modules/login/login.module';
import { MainModule } from './modules/main/main.module';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { NotificationListComponent } from './components/notification-list/notification-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ErrorPageComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        LoginModule,
        MainModule,
        LandingPageModule
    ],
    providers: [
        AuthenticationGuard,
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
