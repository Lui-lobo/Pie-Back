import { TestBed } from '@angular/core/testing';

import { UserRecoverService } from './user-recover.service';

describe('UserRecoverService', () => {
  let service: UserRecoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRecoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
