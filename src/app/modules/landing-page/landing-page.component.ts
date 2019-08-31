import { Component } from '@angular/core';
import { NavbarLinkModel } from 'src/app/models';
import { AboutSectionItemModel, TeamMemberModel, ContactDataModel } from './_models';
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
    teamSectionMembersObject: TeamMemberModel[];
    applicationName: string;
    organizationName: string;
    organizationLink: string;
    contactData: ContactDataModel;

    constructor(private service: LandingPageService) {
        this.navbarLinks = this.service.getNavbarLinks();
        this.aboutSectionItems = this.service.getAboutSectionItems();
        this.designSectionHeader = this.service.getDesignSectionHeader();
        this.designSectionParagraph = this.service.getDesignSectionParagraph();
        this.teamSectionMembersObject = this.service.getTeamSectionMembersObject();

        this.applicationName = 'Noodlee System';
        this.organizationName = 'Noodlee System';
        this.organizationLink = 'https://github.com/noodlee-system';
        this.contactData = {
            email: "contact@noodleesystem.com",
            location: 'Gliwice, Poland',
            phone: '+48 123 456 789'
        }
    }
}
