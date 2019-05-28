import { NgModule } from '@angular/core';
import {
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule
} from '@angular/material';

const MaterialModulesArray = [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule
];

@NgModule({
    declarations: [],
    imports: MaterialModulesArray,
    exports: MaterialModulesArray
})
export class MaterialModule { }
