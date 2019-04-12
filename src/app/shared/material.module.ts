import { NgModule } from '@angular/core';
import {
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule
} from '@angular/material';

const MaterialModulesArray = [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
];

@NgModule({
    declarations: [],
    imports: MaterialModulesArray,
    exports: MaterialModulesArray
})
export class MaterialModule { }
