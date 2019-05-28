import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './_components/landing-page/landing-page.component';

const LandingPageRouting: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        pathMatch: 'full'
    }
];

export const LandingPageRoutingModule = RouterModule.forChild(LandingPageRouting);
