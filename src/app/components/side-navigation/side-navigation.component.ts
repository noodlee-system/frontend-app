import { Component, OnInit, Input } from '@angular/core';
import { SideNavigationItemModel } from 'src/app/models';

@Component({
    selector: 'side-navigation',
    templateUrl: './side-navigation.component.html'
})
export class SideNavigationComponent implements OnInit {
    @Input() navigationItems: SideNavigationItemModel[];
    @Input() coursesList: SideNavigationItemModel[];

    constructor() { }

    ngOnInit() {
    }

}
