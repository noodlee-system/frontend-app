import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { LoginRoutingModule } from './login.routing';
import { LoginPageComponent } from './_components/login-page/login-page.component';
import { LoginFormComponent } from './_components/login-form/login-form.component';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';

const components = [
    LoginPageComponent,
    LoginFormComponent
];

@NgModule({
    imports: [CommonModule, MaterialModule, LoginRoutingModule, SharedModule],
    declarations: components,
    exports: components
})
export class LoginModule {}
