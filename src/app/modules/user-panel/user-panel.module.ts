import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { UserPanelPageComponent } from './_components/user-panel-page/user-panel-page.component';
import { UserPanelRoutingModule } from './user-panel.routing';

const components = [
    UserPanelPageComponent
];

@NgModule({
    imports: [MaterialModule, UserPanelRoutingModule],
    declarations: components,
    exports: components
})
export class UserPanelModule {}
