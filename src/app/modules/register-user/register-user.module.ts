import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RegisterPageRoutingModule } from './register-user.routing';
import { SharedModule } from '../shared.module';
import { RegisterPageComponent, RegisterFormComponent } from './_components';

const components = [
    RegisterPageComponent,
    RegisterFormComponent
];

@NgModule({
    imports: [MaterialModule, RegisterPageRoutingModule, SharedModule],
    declarations: components,
    exports: components
})
export class RegisterUserModule {}
