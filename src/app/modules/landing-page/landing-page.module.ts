import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { LandingPageRoutingModule } from './landing-page.routing';
import { LandingPageComponent } from './_components';

const components = [
    LandingPageComponent
];

@NgModule({
    imports: [MaterialModule, LandingPageRoutingModule],
    declarations: components,
    exports: components
})
export class LandingPageModule {}
