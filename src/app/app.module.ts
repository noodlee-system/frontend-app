import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AuthenticationService } from './common/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        LoginFormComponent,
        LoginPageComponent,
        FooterComponent,
        ToolbarComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule, 
        BrowserAnimationsModule
    ],
    providers: [
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
