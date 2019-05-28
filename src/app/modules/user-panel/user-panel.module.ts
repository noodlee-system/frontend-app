import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { UserPanelRoutingModule } from './user-panel.routing';
import { UserPanelPageComponent } from './_components';

const components = [
    UserPanelPageComponent
];

@NgModule({
    imports: [MaterialModule, UserPanelRoutingModule],
    declarations: components,
    exports: components
})
export class UserPanelModule {}
