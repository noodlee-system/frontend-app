import { Component, Input } from '@angular/core';

@Component({
    selector: 'landing-design-section',
    templateUrl: './design-section.component.html'
})
export class DesignSectionComponent {
    @Input() designHeader: string;
    @Input() designParagraph: string;

    constructor() { }
}
