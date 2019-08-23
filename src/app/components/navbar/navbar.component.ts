import { Component, Input } from '@angular/core';
import { NavbarLinkModel } from '../../models';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    @Input() links: NavbarLinkModel[];

    constructor() { }
}
