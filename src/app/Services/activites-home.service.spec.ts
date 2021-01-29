import { TestBed } from '@angular/core/testing';

import { ActivitesHomeService } from './activites-home.service';

describe('ActivitesHomeService', () => {
  let service: ActivitesHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitesHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
