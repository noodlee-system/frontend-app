import { NgModule } from '@angular/core';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent, NavbarComponent } from '../components';
import { CommonModule } from '@angular/common';
import { SystemNavbarComponent } from '../components/system-navbar/system-navbar.component';
import { ErrorHandlingHttpInterceptor } from '../authentication/http.interceptor';
import { SideNavigationComponent } from '../components/side-navigation/side-navigation.component';
import { RouterModule } from '@angular/router';

const SharedComponentsArray = [
    ToolbarComponent,
    NavbarComponent,
    SideNavigationComponent,
    SystemNavbarComponent,
    FooterComponent
];

const sharedModules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule
];

@NgModule({
    declarations: SharedComponentsArray,
    imports: sharedModules,
    exports: [
        ...SharedComponentsArray,
        ...sharedModules
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlingHttpInterceptor,
            multi: true
        },
    ]
})
export class SharedModule { }
