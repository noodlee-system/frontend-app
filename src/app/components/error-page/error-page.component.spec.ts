import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorPageComponent } from './error-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ErrorPageComponent', () => {
    let component: ErrorPageComponent;
    let fixture: ComponentFixture<ErrorPageComponent>;

    const ActivatedRouteMock = {
        data: of({ statusCode: 404 })
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ErrorPageComponent],
            providers: [
                { provide: ActivatedRoute, useValue: ActivatedRouteMock }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ErrorPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
