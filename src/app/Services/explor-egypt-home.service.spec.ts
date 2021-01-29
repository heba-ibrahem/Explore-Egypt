import { TestBed } from '@angular/core/testing';

import { ExplorEgyptHomeService } from './explor-egypt-home.service';

describe('ExplorEgyptHomeService', () => {
  let service: ExplorEgyptHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplorEgyptHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
