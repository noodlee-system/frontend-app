import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPageComponent } from './register-page.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToolbarComponent, FooterComponent } from 'src/app/components';
import { RegisterConfirmationComponent } from '../register-confirmation/register-confirmation.component';

describe('RegisterPageComponent', () => {
    let component: RegisterPageComponent;
    let fixture: ComponentFixture<RegisterPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RegisterPageComponent,
                RegisterFormComponent,
                RegisterConfirmationComponent,
                ToolbarComponent,
                FooterComponent
            ],
            imports: [
                MaterialModule,
                ReactiveFormsModule,
                FormsModule,
                BrowserAnimationsModule,
                HttpClientModule
            ],
            providers: [
                AuthenticationService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
