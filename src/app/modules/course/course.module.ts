import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CourseRoutingModule } from './course.routing';
import { CoursePageComponent } from './_components/course-page/course-page.component';

const components = [
    CoursePageComponent
];

@NgModule({
    imports: [MaterialModule, CourseRoutingModule],
    declarations: components,
    exports: components
})
export class CourseModule {}
