import { Routes, RouterModule, Route } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { MainComponent } from './modules/main/main.component';

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
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'calendar',
                loadChildren: './modules/calendar-page/calendar-page.module#CalendarPageModule',
                data: {
                    breadcrumb: 'Calendar',
                    headerIcon: 'icon-calendar'
                },
                canActivate: [AuthenticationGuard]
            },
            {
                path: 'course',
                loadChildren: './modules/course/course.module#CourseModule',
                data: {
                    breadcrumb: 'Courses',
                    headerIcon: 'icon-list'
                },
                canActivate: [AuthenticationGuard]
            },
            {
                path: 'dashboard',
                loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
                data: {
                    breadcrumb: 'Dashboard',
                    headerIcon: 'icon-dashboard'
                },
                canActivate: [AuthenticationGuard]
            },
            {
                path: 'user',
                loadChildren: './modules/user-panel/user-panel.module#UserPanelModule',
                data: {
                    breadcrumb: 'User panel',
                    headerIcon: 'icon-user'
                },
                canActivate: [AuthenticationGuard]
            }
        ],
    },
    ...errorPagesRoutes,
    {
        path: '**',
        redirectTo: '404'
    }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
