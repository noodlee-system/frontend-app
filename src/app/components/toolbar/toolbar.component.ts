import { Component, Input } from '@angular/core';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
    @Input() applicationName: string;
    @Input() class: string;

    constructor() { }
}
