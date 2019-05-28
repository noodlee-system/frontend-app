import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { TeacherPanelRoutingModule } from './teacher-panel.routing';
import { TeacherPanelPageComponent } from './_components';

const components = [
    TeacherPanelPageComponent
];

@NgModule({
    imports: [MaterialModule, TeacherPanelRoutingModule],
    declarations: components,
    exports: components
})
export class TeacherPanelModule {}
