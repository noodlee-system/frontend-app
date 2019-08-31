import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService, UserService } from 'src/app/services';
import { SideNavigationItemModel } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent {
    private userRole: string;

    notifications: Object[];
    userObject: Object;
    sideNavigationItems: SideNavigationItemModel[];
    coursesList: SideNavigationItemModel[];

    constructor(
        private http: HttpClient,
        private authentication: AuthenticationService,
        private users: UserService
    ) {
        // this.userRole = this.authentication.getUserContext().role;
        this.notifications = [
            {
                message: 'Test notification 1',
            },
            {
                message: 'Test notification 2'
            }
        ];

        this.http.get(`${environment.apiUrl}/users/`).subscribe(value => console.warn(value));

        this.userObject = {
            firstname: 'Dawid',
            lastname: 'Skrzypczyk',
            avatar: this.users.getLoggedUserImage()
        };

        this.sideNavigationItems = [
            {
                display: 'Dashboard',
                name: 'dashboard',
                route: '/dashboard'
            },
            {
                display: 'Calendar',
                name: 'calendar',
                route: '/calendar'
            },
            {
                display: 'My courses',
                name: 'courses',
                route: '/courses',
            }
        ];

        this.coursesList = [
            {
                display: 'Course 1',
                name: 'courses1',
                route: '/courses/course-1-id'
            },
            {
                display: 'Course 2',
                name: 'courses2',
                route: '/courses/course-2-id'
            }
        ];
    }

    greetingMessage(): string {
        return `Hello ${this.userRole}`;
    }
}
