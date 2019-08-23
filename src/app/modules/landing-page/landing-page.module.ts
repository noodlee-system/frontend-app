import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { LandingPageRoutingModule } from './landing-page.routing';
import { LandingPageComponent } from './landing-page.component';
import {
  AboutComponent,
  ContactComponent,
  DesignSectionComponent,
  FooterComponent,
  HeaderComponent,
  PricingComponent,
  ReviewsComponent,
  StatisticsBarComponent,
  TeamSectionComponent
} from './_components';
import { SharedModule } from '../shared.module';
import { NavbarComponent } from '../../components';

const components = [
  LandingPageComponent,
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

@NgModule({
  imports: [MaterialModule, SharedModule, LandingPageRoutingModule],
  declarations: components,
  exports: components
})
export class LandingPageModule { }
