import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPanelPageComponent } from './teacher-panel-page.component';

describe('TeacherPanelPageComponent', () => {
  let component: TeacherPanelPageComponent;
  let fixture: ComponentFixture<TeacherPanelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPanelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
