import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { LoginRoutingModule } from './login.routing';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';
import { LoginPageComponent, LoginFormComponent } from './_components';

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
