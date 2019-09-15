import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html'
})
export class CoursePageComponent {
    constructor(private route: ActivatedRoute) {}

    getRouteIcon(): string {
        const icon: string = this.route.snapshot.data['headerIcon'];

        return icon
            ? `icon ${icon} page__header-icon`
            : '';
    }

    getPageHeader(): string {
        const header: string = this.route.snapshot.data['breadcrumb'];

        return header ? header : '';
    }
}
