import { TestBed } from '@angular/core/testing';

import { PageIdNotExistGuard } from './page-id-not-exist.guard';

describe('PageIdNotExistGuard', () => {
  let guard: PageIdNotExistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PageIdNotExistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
