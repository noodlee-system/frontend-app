import { Routes, RouterModule, Route } from '@angular/router';
// import { AuthGuard } from './common/guards/auth.guard';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AppComponent } from './app.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const errorPagesRoutes: Route[] = [
    {
        path: '403',
        component: ErrorPageComponent,
        data: { statusCode: 403 }
    },
    {
        path: '404',
        component: ErrorPageComponent,
        data: { statusCode: 404 }
    },
    {
        path: '500',
        component: ErrorPageComponent,
        data: { statusCode: 500 }
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
            {
                path: 'calendar',
                loadChildren: './modules/calendar-page/calendar-page.module#CalendarPageModule',
                data: { breadcrumb: 'Calendar'}
                // canActivate: [AuthGuard]
            },
            // {
            //     path: 'course',
            //     loadChildren: './modules/course/course.module#CourseModule',
            //     // canActivate: [AuthGuard]
            // },
            {
                path: 'home',
                loadChildren: './modules/landing-page/landing-page.module#LandingPageModule'
            },
            {
                path: 'login',
                loadChildren: './modules/login/login.module#LoginModule',
            },
            {
                path: 'register',
                loadChildren: './modules/register-user/register-user.module#RegisterUserModule',
            },
            {
                path: 'dashboard',
                loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
                data: { breadcrumb: 'Dashboard'},
                canActivate: [AuthenticationGuard]
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
