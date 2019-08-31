import { Routes, RouterModule } from '@angular/router';
import { CalendarPageComponent } from './calendar-page.component';

const CalendarPageRouting: Routes = [
    {
        path: '',
        component: CalendarPageComponent,
        pathMatch: 'full'
    }
];

export const CalendarPageRoutingModule = RouterModule.forChild(CalendarPageRouting);
