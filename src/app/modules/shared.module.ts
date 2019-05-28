import { NgModule } from '@angular/core';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../components';

const SharedComponentsArray = [
    ToolbarComponent,
    FooterComponent
];

const sharedModules = [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
];

@NgModule({
    declarations: SharedComponentsArray,
    imports: sharedModules,
    exports: [
        ...SharedComponentsArray,
        ...sharedModules
    ]
})
export class SharedModule {}
