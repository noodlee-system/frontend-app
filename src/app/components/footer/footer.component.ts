import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    @Input() organizationName: string;
    @Input() organizationLink: string;

    constructor() { }
}
