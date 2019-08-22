import { Routes, RouterModule } from '@angular/router';
import { UserPanelPageComponent } from './_components/user-panel-page/user-panel-page.component';

const UserPanelRouting: Routes = [
    {
        path: '',
        component: UserPanelPageComponent,
        pathMatch: 'full'
    }
];

export const UserPanelRoutingModule = RouterModule.forChild(UserPanelRouting);
