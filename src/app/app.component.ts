import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
    applicationName: string;
    timerObject: number;
    currentDate: string;

    constructor() {
        this.applicationName = 'Noodlee System';
        this.currentDate = this.getCurrentDateString();

        this.timerObject = window.setInterval( () => {
            this.currentDate = this.getCurrentDateString();
        }, 1000);
    }

    getCurrentDateString(): string {
        return moment().format("DD-MM-YYYY HH:mm:ss");
    }

    ngOnDestroy(): void {
        clearInterval(this.timerObject);
    }
}
