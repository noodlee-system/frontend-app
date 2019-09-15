import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { LoginRoutingModule } from './login.routing';
import { CommonModule } from '@angular/common';
import { LoginPageComponent, LoginFormComponent } from './_components';
import { SharedModule } from '../shared.module';

const components = [
    LoginPageComponent,
    LoginFormComponent
];

@NgModule({
    imports: [CommonModule, MaterialModule, LoginRoutingModule, SharedModule],
    declarations: components,
    exports: components
})
export class LoginModule { }
