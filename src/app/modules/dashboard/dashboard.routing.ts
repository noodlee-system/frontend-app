import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './_components/dashboard-page/dashboard-page.component';

const DashboardRouting: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
        pathMatch: 'full'
    }
];

export const DashboardRoutingModule = RouterModule.forChild(DashboardRouting);
