import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './components';
import { AuthenticationService } from './services';
import { AuthenticationGuard } from './guards/authentication.guard';

@NgModule({
    declarations: [
        AppComponent,
        ErrorPageComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    providers: [
        AuthenticationGuard,
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
