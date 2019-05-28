import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import {
    BadRequestComponent,
    ForbiddenComponent,
    FooterComponent,
    ToolbarComponent,
    NotFoundComponent,
    InternalServerErrorComponent
} from './components';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                FooterComponent,
                ToolbarComponent,
                BadRequestComponent,
                ForbiddenComponent,
                NotFoundComponent,
                InternalServerErrorComponent
            ],
            imports: [
                BrowserModule,
                MaterialModule,
                AppRoutingModule,
                ReactiveFormsModule,
                HttpClientModule,
                FormsModule,
                BrowserAnimationsModule
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
