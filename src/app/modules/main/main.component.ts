import { Component } from '@angular/core';
import { SideNavigationItemModel } from './models';
import { UserService } from 'src/app/services';
import { CourseService } from 'src/app/services/course.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})
export class MainComponent {
    applicationName: string;
    userObject: Object;
    notifications: Object[];
    sideNavigationItems: SideNavigationItemModel[];
    coursesList: SideNavigationItemModel[];

    dataLoaded: boolean;

    constructor(
        private users: UserService,
        private course: CourseService,
        private system: SystemService
    ) {
        this.dataLoaded = false;
        this.sideNavigationItems = this.system.getSideNavigationItems();
        this.applicationName = this.system.getApplicationName();
        this.coursesList = this.course.getCourseList();
        this.notifications = [
            {
                message: 'Test notification 1',
            },
            {
                message: 'Test notification 2'
            },
            {
                message: 'Test notification 3'
            }
        ];
        this.users.getUserAvatarData().subscribe((user) => {
            this.userObject = user;
            this.dataLoaded = true;
        });
    }
}
