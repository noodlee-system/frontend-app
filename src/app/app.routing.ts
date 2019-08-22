import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './common/guards/auth.guard';
import { BadRequestComponent } from './components/bad-request/bad-request.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppComponent } from './app.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';

const errorPagesRoutes = [
    {
        path: '400',
        component: BadRequestComponent
    },
    {
        path: '401',
        component: ForbiddenComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '500',
        component: InternalServerErrorComponent
    },
];

const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            ...errorPagesRoutes,
            {
            path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            // {
            //     path: 'calendar',
            //     loadChildren: './modules/calendar/calendar.module#CalendarModule',
            //     data: { breadcrumb: 'Calendar'}
            //     // canActivate: [AuthGuard]
            // },
            // {
            //     path: 'course',
            //     loadChildren: './modules/course/course.module#CourseModule',
            //     // canActivate: [AuthGuard]
            // },
            // {
            //     path: 'dashboard',
            //     loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
            //     data: { breadcrumb: 'Dashboard'}
            //     // canActivate: [AuthGuard]
            // },
            {
                path: 'home',
                loadChildren: './modules/landing-page/landing-page.module#LandingPageModule',
                // canActivate: [AuthGuard]
            },
            {
                path: 'login',
                loadChildren: './modules/login/login.module#LoginModule',
            },
            {
                path: 'register',
                loadChildren: './modules/register-user/register-user.module#RegisterUserModule',
            },
            // {
            //     path: 'teacher',
            //     loadChildren: './modules/teacher-panel/teacher-panel.module#TeacherPanelModule',
            //     data: { breadcrumb: 'Teacher panel'}
            //     // canActivate: [AuthGuard]
            // },
            // {
            //     path: 'user',
            //     loadChildren: './modules/user-panel/user-panel.module#UserPanelModule',
            //     data: { breadcrumb: 'User panel'}
            //     // canActivate: [AuthGuard]
            // },
            {
                path: '**',
                redirectTo: '404'
            }
        ]
    }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
