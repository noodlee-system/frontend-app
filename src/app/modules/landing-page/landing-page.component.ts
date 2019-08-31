import { Component } from '@angular/core';
import { NavbarLinkModel } from 'src/app/models';
import { AboutSectionItemModel } from './_models';
import { LandingPageService } from './_services';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html'
})
export class LandingPageComponent {
    navbarLinks: NavbarLinkModel[];
    aboutSectionItems: AboutSectionItemModel[];
    designSectionParagraph: string;
    designSectionHeader: string;

    constructor(private service: LandingPageService) {
        this.navbarLinks = this.service.getNavbarLinks();
        this.aboutSectionItems = this.service.getAboutSectionItems();
        this.designSectionHeader = this.service.getDesignSectionHeader();
        this.designSectionParagraph = this.service.getDesignSectionParagraph();
    }
}
