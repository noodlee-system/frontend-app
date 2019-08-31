import { Component, Input } from '@angular/core';
import { AboutSectionItemModel } from '../../_models';

@Component({
    selector: 'landing-about',
    templateUrl: './about.component.html'
})
export class AboutComponent {
    @Input() aboutItems: AboutSectionItemModel[];

    constructor() { }

    getIconClass(icon: string): string {
        return `icon icon-${icon} about-section__content-icon`;
    }
}
