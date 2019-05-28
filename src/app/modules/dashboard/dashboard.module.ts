import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardPageComponent } from './_components/dashboard-page/dashboard-page.component';

const components = [
    DashboardPageComponent
];

@NgModule({
    imports: [MaterialModule, DashboardRoutingModule],
    declarations: components,
    exports: components
})
export class DashboardModule {}
