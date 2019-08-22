import { Routes, RouterModule } from '@angular/router';
import { TeacherPanelPageComponent } from './_components/teacher-panel-page/teacher-panel-page.component';

const TeacherPanelRouting: Routes = [
    {
        path: '',
        component: TeacherPanelPageComponent,
        pathMatch: 'full'
    }
];

export const TeacherPanelRoutingModule = RouterModule.forChild(TeacherPanelRouting);
