import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CalendarRoutingModule } from './calendar.routing';
import { CalendarPageComponent } from './_components';

const components = [
    CalendarPageComponent
];

@NgModule({
    imports: [MaterialModule, CalendarRoutingModule],
    declarations: components,
    exports: components
})
export class CalendarModule {}
