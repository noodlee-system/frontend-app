import { TestBed, async, inject } from '@angular/core/testing';

import { AuthorizedNotAllowedGuard } from './authorized-not-allowed.guard';

describe('AuthorizedNotAllowedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizedNotAllowedGuard]
    });
  });

  it('should ...', inject([AuthorizedNotAllowedGuard], (guard: AuthorizedNotAllowedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
