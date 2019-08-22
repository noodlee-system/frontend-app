import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BadRequestComponent } from './components/bad-request/bad-request.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        BadRequestComponent,
        InternalServerErrorComponent,
        ForbiddenComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    providers: [
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
