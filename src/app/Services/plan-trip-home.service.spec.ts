import { TestBed } from '@angular/core/testing';

import { PlanTripHomeService } from './plan-trip-home.service';

describe('PlanTripHomeService', () => {
  let service: PlanTripHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanTripHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
