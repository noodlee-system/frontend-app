import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { LandingPageRoutingModule } from './landing-page.routing';
import { LandingPageComponent } from './landing-page.component';
import {
  AboutComponent,
  ContactComponent,
  DesignSectionComponent,
  HeaderComponent,
  PricingComponent,
  ReviewsComponent,
  StatisticsBarComponent,
  TeamSectionComponent,
  TeamMemberComponent,
  PricingItemComponent
} from './_components';
import { SharedModule } from '../shared.module';

const components = [
  LandingPageComponent,
  AboutComponent,
  ContactComponent,
  DesignSectionComponent,
  HeaderComponent,
  PricingComponent,
  PricingItemComponent,
  ReviewsComponent,
  StatisticsBarComponent,
  TeamSectionComponent,
  TeamMemberComponent
];

@NgModule({
  imports: [MaterialModule, SharedModule, LandingPageRoutingModule],
  declarations: components,
  exports: components
})
export class LandingPageModule { }
