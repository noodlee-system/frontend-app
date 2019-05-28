import { Routes, RouterModule } from '@angular/router';
import { CalendarPageComponent } from './_components/calendar-page/calendar-page.component';

const CalendarRouting: Routes = [
    {
        path: '',
        component: CalendarPageComponent,
        pathMatch: 'full'
    }
];

export const CalendarRoutingModule = RouterModule.forChild(CalendarRouting);