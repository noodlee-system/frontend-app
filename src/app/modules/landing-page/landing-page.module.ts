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
  TeamSectionComponent
} from './_components';
import { SharedModule } from '../shared.module';
import { TeamMemberComponent } from './_components/team-member/team-member.component';

const components = [
  LandingPageComponent,
  AboutComponent,
  ContactComponent,
  DesignSectionComponent,
  HeaderComponent,
  PricingComponent,
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
