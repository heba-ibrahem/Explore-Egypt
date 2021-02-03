import { TestBed } from '@angular/core/testing';

import { ActivitiesDepService } from './activities-dep.service';

describe('ActivitiesDepService', () => {
  let service: ActivitiesDepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesDepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
