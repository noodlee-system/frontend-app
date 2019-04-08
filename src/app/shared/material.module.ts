import { NgModule } from '@angular/core';
import {
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
} from '@angular/material';

const MaterialModulesArray = [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
];

@NgModule({
    declarations: [],
    imports: MaterialModulesArray,
    exports: MaterialModulesArray
})
export class MaterialModule { }
