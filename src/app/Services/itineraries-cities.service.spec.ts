import { TestBed } from '@angular/core/testing';

import { ItinerariesCitiesService } from './itineraries-cities.service';

describe('ItinerariesCitiesService', () => {
  let service: ItinerariesCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItinerariesCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
