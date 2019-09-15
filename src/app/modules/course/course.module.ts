import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CourseRoutingModule } from './course.routing';
import { CoursePageComponent, CourseListPageComponent } from './_components';

const components = [
    CoursePageComponent,
    CourseListPageComponent
];

@NgModule({
    imports: [MaterialModule, CourseRoutingModule],
    declarations: components,
    exports: components
})
export class CourseModule {}
