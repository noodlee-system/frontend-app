import { Component, Input } from '@angular/core';
import { PricingPlanModel } from '../../_models';

@Component({
    selector: 'pricing-item',
    templateUrl: './pricing-item.component.html'
})
export class PricingItemComponent {
    @Input() data: PricingPlanModel

    constructor() { }
}
