import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardPageComponent } from './_components';
import { SharedModule } from '../shared.module';

const components = [
    DashboardPageComponent
];

@NgModule({
    imports: [
        SharedModule,
        MaterialModule,
        DashboardRoutingModule
    ],
    declarations: components,
    exports: components
})
export class DashboardModule {}
