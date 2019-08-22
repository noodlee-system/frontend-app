import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LandingPageComponent } from './landing-page.component';
import {
    AboutComponent,
    ContactComponent,
    DesignSectionComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    PricingComponent,
    ReviewsComponent,
    StatisticsBarComponent,
    TeamSectionComponent
} from './_components';

const landingPageComponents = [
    AboutComponent,
    ContactComponent,
    DesignSectionComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    PricingComponent,
    ReviewsComponent,
    StatisticsBarComponent,
    TeamSectionComponent
];

describe('LandingPageComponent', () => {
    let component: LandingPageComponent;
    let fixture: ComponentFixture<LandingPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LandingPageComponent,
                ...landingPageComponents
            ],
            imports: [RouterTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LandingPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
