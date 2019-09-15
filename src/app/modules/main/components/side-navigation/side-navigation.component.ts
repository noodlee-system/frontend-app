import { Component, Input } from '@angular/core';
import { SideNavigationItemModel } from '../../models';

@Component({
    selector: 'side-navigation',
    templateUrl: './side-navigation.component.html'
})
export class SideNavigationComponent {
    @Input() applicationName: string;
    @Input() navigationItems: SideNavigationItemModel[];
    @Input() coursesList: SideNavigationItemModel[];
    @Input() user: Object;

    constructor() { }

    getIconClass(iconName: string): string {
        return `icon icon-${iconName}`;
    }
}
