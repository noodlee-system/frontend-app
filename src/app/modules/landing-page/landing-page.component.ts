import { Component } from '@angular/core';
import { NavbarLinkModel } from 'src/app/models';
import { AboutSectionItemModel } from './_models';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html'
})
export class LandingPageComponent {
    navbarLinks: NavbarLinkModel[];
    aboutSectionItems: AboutSectionItemModel[];

    constructor() {
        this.navbarLinks = [
            { href: '#about', text: 'about' },
            { href: '#team', text: 'team', icon: 'user' },
            { href: '#work', text: 'work', icon: 'th' },
            { href: '#pricing', text: 'pricing', icon: 'dollar' },
            { href: '#contact', text: 'contact', icon: 'mail-alt' },
            { href: 'login', text: 'login', icon: 'login' }
        ];

        this.aboutSectionItems = [
            {
                icon: 'desktop',
                header: 'Responsive',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
            },
            {
                icon: 'heart',
                header: 'Passion',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
            },
            {
                icon: 'diamond',
                header: 'Design',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
            },
            {
                icon: 'cog',
                header: 'Support',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
            }
        ];
    }
}
