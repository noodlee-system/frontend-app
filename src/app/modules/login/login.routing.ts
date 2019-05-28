import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './_components/login-page/login-page.component';

const LoginRouting: Routes = [
    {
        path: '',
        component: LoginPageComponent,
        pathMatch: 'full'
    }
];

export const LoginRoutingModule = RouterModule.forChild(LoginRouting);
