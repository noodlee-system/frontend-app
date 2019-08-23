import { Component } from '@angular/core';
import { NavbarLinkModel } from 'src/app/models';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html'
})
export class LandingPageComponent {
    navbarLinks: NavbarLinkModel[];

    constructor() {
        this.navbarLinks = [
            { href: '#about', text: 'about' },
            { href: '#team', text: 'team' },
            { href: '#work', text: 'work' },
            { href: '#pricing', text: 'pricing' },
            { href: '#contact', text: 'contact' },
            { href: 'login', text: 'login' }
        ];
    }
}
