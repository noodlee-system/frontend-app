import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginFormComponent,
        LoginPageComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule, 
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
