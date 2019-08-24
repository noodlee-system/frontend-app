import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import {
    FooterComponent,
    ToolbarComponent,
    ErrorPageComponent,
} from './components';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


describe('AppComponent', () => {
    const ActivatedRouteMock = {
        data: of({ statusCode: 404 })
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                FooterComponent,
                ToolbarComponent,
                ErrorPageComponent
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
            providers: [
                { provide: ActivatedRoute, useValue: ActivatedRouteMock }
            ]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
