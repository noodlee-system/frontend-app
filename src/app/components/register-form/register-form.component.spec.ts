import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
    let component: RegisterFormComponent;
    let fixture: ComponentFixture<RegisterFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterFormComponent],
            imports: [
                MaterialModule,
                ReactiveFormsModule,
                FormsModule,
                BrowserAnimationsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
