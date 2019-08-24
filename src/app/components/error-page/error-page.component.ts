import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-error-page',
    templateUrl: './error-page.component.html'
})
export class ErrorPageComponent implements OnInit, OnDestroy {
    statusCode: number;
    header: string;
    description: string;

    private routingDataSubscription: Subscription;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.routingDataSubscription = this.route.data.subscribe(data => {
            this.statusCode = data.statusCode;

            this.setHeaderAndDescription(data.statusCode);
        });
    }

    ngOnDestroy(): void {
        this.routingDataSubscription.unsubscribe();
    }

    private setHeaderAndDescription(statusCode: number): void {
        switch (statusCode) {
            case 403:
                this.header = 'This area is forbidden';
                this.description = 'Turn back now!';
                break;

            case 404:
                this.header = 'Look like you\'re lost';
                this.description = 'The page you are looking for not avaible!';
                break;

            case 500:
                this.header = 'Sorry, it\'s me, not you :(';
                this.description = 'Let me try again!';
                break;

            default:
                this.header = '';
                this.description = '';
                break;
        }
    }
}
