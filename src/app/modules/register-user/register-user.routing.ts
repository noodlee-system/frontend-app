import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './_components/register-page/register-page.component';

const RegisterUserRouting: Routes = [
    {
        path: '',
        component: RegisterPageComponent,
        pathMatch: 'full'
    }
];

export const RegisterPageRoutingModule = RouterModule.forChild(RegisterUserRouting);
