import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelPageComponent } from './user-panel-page.component';

describe('UserPanelPageComponent', () => {
  let component: UserPanelPageComponent;
  let fixture: ComponentFixture<UserPanelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPanelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
