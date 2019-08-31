import { Component, Input } from '@angular/core';
import { TeamMemberModel } from '../../_models';

@Component({
    selector: 'landing-team-section',
    templateUrl: './team-section.component.html'
})
export class TeamSectionComponent {
    @Input() teamMembers: TeamMemberModel[];

    constructor() { }
}
