import { Component, OnInit, Input } from '@angular/core';
import { UserContext } from 'src/app/models';

@Component({
    selector: 'system-navbar',
    templateUrl: './system-navbar.component.html'
})
export class SystemNavbarComponent implements OnInit {
    @Input() notifications: Object[];
    @Input() user: Object;

    constructor() { }

    ngOnInit() {
    }

}
