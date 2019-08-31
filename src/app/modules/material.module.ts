import { NgModule } from '@angular/core';
import {
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
} from '@angular/material';

const MaterialModulesArray = [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
];

@NgModule({
    declarations: [],
    imports: MaterialModulesArray,
    exports: MaterialModulesArray
})
export class MaterialModule { }
