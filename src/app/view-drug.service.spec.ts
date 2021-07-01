import { TestBed } from '@angular/core/testing';

import { ViewDrugService } from './view-drug.service';

describe('ViewDrugService', () => {
  let service: ViewDrugService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewDrugService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
