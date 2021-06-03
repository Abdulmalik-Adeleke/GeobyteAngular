import { TestBed } from '@angular/core/testing';

import { StaffAuthGuard } from './staff-auth.guard';

describe('StaffAuthGuard', () => {
  let guard: StaffAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StaffAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
