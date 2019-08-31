import { Component, Input } from '@angular/core';
import { ContactDataModel } from '../../_models';

@Component({
    selector: 'landing-contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    @Input() data: ContactDataModel;

    constructor() { }
}
