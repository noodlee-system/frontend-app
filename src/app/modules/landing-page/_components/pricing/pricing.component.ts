import { Component, Input } from '@angular/core';
import { PricingPlanModel } from '../../_models';

@Component({
    selector: 'landing-pricing',
    templateUrl: './pricing.component.html'
})
export class PricingComponent {
    @Input() pricingItems: PricingPlanModel[];

    constructor() { }

    setPricingItemClass(item: PricingPlanModel): string {
        return item.name === 'Pro'
            ? 'pricing__item pricing__item--pro'
            : 'pricing__item';
    }
}
