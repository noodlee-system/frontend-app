import { Routes, RouterModule } from '@angular/router';
import { CoursePageComponent, CourseListPageComponent } from './_components';

const CourseRouting: Routes = [
    {
        path: '',
        component: CourseListPageComponent,
        pathMatch: 'full'
    },
    {
        path: ':id',
        component: CoursePageComponent
    }
];

export const CourseRoutingModule = RouterModule.forChild(CourseRouting);
