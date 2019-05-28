import { Routes, RouterModule } from '@angular/router';
import { CoursePageComponent } from './_components/course-page/course-page.component';

const CourseRouting: Routes = [
    {
        path: '',
        component: CoursePageComponent,
        pathMatch: 'full'
    }
];

export const CourseRoutingModule = RouterModule.forChild(CourseRouting);
