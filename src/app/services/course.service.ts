import { Injectable } from '@angular/core';
import { SideNavigationItemModel } from '../modules/main/models';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() { }

  getCourseList(): SideNavigationItemModel[] {
    return [
        {
            display: 'Course 1',
            name: 'courses1',
            route: '/course/course-1-uid'
        },
        {
            display: 'Course 2',
            name: 'courses2',
            route: '/course/course-2-uid'
        }
    ];
  }
}
