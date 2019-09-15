import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { SideNavigationComponent, SystemNavbarComponent } from './components';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        MaterialModule
    ],
    declarations: [
        MainComponent,
        SideNavigationComponent,
        SystemNavbarComponent
    ],
    exports: [
        MainComponent
    ],
})
export class MainModule { }
