import { Injectable } from '@angular/core';
import { NavbarLinkModel } from 'src/app/models';
import { AboutSectionItemModel, TeamMemberModel } from '../_models';
import { UserService } from 'src/app/services';

@Injectable({
    providedIn: 'root'
})
export class LandingPageService {
    constructor(private users: UserService) { }

    getNavbarLinks(): NavbarLinkModel[] {
        return [
            { href: '#about', text: 'about' },
            { href: '#team', text: 'team', icon: 'user' },
            { href: '#work', text: 'work', icon: 'th' },
            { href: '#pricing', text: 'pricing', icon: 'dollar' },
            { href: '#contact', text: 'contact', icon: 'mail-alt' },
            { href: 'login', text: 'login', icon: 'login' }
        ];
    }

    getAboutSectionItems(): AboutSectionItemModel[] {
        return [
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

    getDesignSectionHeader(): string {
        return 'We know design.';
    }

    getDesignSectionParagraph(): string {
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis nisl in justo consectetur efficitur. Proin eget hendrerit dui, sed gravida augue. Proin consequat purus a sapien accumsan imperdiet. Fusce iaculis, massa nec sodales gravida, lorem lacus auctor urna, a varius lorem ex non ex. Suspendisse varius orci ornare accumsan aliquam. Sed nec sollicitudin nunc. Vivamus orci mauris, sagittis sit amet vestibulum et, vulputate vel erat. Aliquam vel lectus volutpat ex faucibus accumsan. Fusce ut ex urna. Mauris fringilla rutrum neque sit amet ultrices. Donec dictum scelerisque orci eget tincidunt. Sed dictum ut ex at fringilla. Sed ut nulla felis.';
    }

    getTeamSectionMembersObject(): TeamMemberModel[] {
        return [
            {
                image: this.users.getAuthorImage(),
                name: 'Dawid Skrzypczyk',
                position: 'CEO & Founder',
                description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
                email: 'skrzypmajster@gmail.com'
            },
            {
                image: this.users.getAuthorImage(),
                name: 'Dawid Skrzypczyk',
                position: 'UI Designer',
                description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
                email: 'skrzypmajster@gmail.com'
            },
            {
                image: this.users.getAuthorImage(),
                name: 'Dawid Skrzypczyk',
                position: 'System Creator',
                description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
                email: 'skrzypmajster@gmail.com'
            },
            {
                image: this.users.getAuthorImage(),
                name: 'Dawid Skrzypczyk',
                position: 'Web Developer',
                description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
                email: 'skrzypmajster@gmail.com'
            }
    ];
    }
}
