import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RegisterPageRoutingModule } from './register-user.routing';
import { RegisterPageComponent } from './_components/register-page/register-page.component';
import { RegisterFormComponent } from './_components/register-form/register-form.component';
import { SharedModule } from '../shared.module';

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
