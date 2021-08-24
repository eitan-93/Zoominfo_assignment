import { TestBed } from '@angular/core/testing';

import { LoginContactsService } from './login-contacts.service';

describe('LoginContactsService', () => {
  let service: LoginContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
