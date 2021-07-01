import { TestBed } from '@angular/core/testing';

import { DrugLocationService } from './drug-location.service';

describe('DrugLocationService', () => {
  let service: DrugLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
