import { Component, Input } from '@angular/core';
import { TeamMemberModel } from '../../_models';

@Component({
    selector: 'team-member',
    templateUrl: './team-member.component.html'
})
export class TeamMemberComponent {
    @Input() data: TeamMemberModel;

    constructor() { }

    getMailLink(): string {
        return `mailto:${this.data.email}`;
    }
}
