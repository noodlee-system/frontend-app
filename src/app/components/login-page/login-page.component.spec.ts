import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { FooterComponent } from '../footer/footer.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';

describe('LoginPageComponent', () => {
    let component: LoginPageComponent;
    let fixture: ComponentFixture<LoginPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LoginPageComponent,
                LoginFormComponent,
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
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
