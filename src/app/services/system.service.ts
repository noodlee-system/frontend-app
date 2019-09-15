import { Injectable } from '@angular/core';
import { SideNavigationItemModel } from '../modules/main/models';

@Injectable({
    providedIn: 'root'
})
export class SystemService {
    constructor() { }

    getSideNavigationItems(): SideNavigationItemModel[] {
        return [
            {
                display: 'Dashboard',
                name: 'dashboard',
                route: '/dashboard',
                icon: 'dashboard'
            },
            {
                display: 'Calendar',
                name: 'calendar',
                route: '/calendar',
                icon: 'calendar'
            },
            {
                display: 'My courses',
                name: 'courses',
                route: '/course',
                icon: 'list'
            }
        ];
    }

    getApplicationName(): string {
        return 'Noodlee System';
    }
}
