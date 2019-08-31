import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

const LandingPageRouting: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        pathMatch: 'full'
    }
];

export const LandingPageRoutingModule = RouterModule.forChild(LandingPageRouting);
