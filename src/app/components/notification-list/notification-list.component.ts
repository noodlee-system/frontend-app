import { Component, Input } from '@angular/core';

@Component({
    selector: 'notification-list',
    templateUrl: './notification-list.component.html'
})
export class NotificationListComponent {
    @Input() notifications: Object[];

    constructor() {
        if (this.notifications) {
            this.notifications = [];
        }
    }
}
