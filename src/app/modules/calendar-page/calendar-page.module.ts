import { NgModule } from '@angular/core';
import { CalendarComponent } from './_components';
import { CalendarPageComponent } from './calendar-page.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarPageRoutingModule } from './calendar-page.routing';
import { MatButtonModule } from '@angular/material';

const components = [
    CalendarComponent,
    CalendarPageComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModalModule,
        FlatpickrModule.forRoot(),
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        CalendarPageRoutingModule,
        MatButtonModule
    ],
    declarations: components,
    exports: components
})
export class CalendarPageModule { }
