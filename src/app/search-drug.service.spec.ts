import { TestBed } from '@angular/core/testing';

import { SearchDrugService } from './search-drug.service';

describe('SearchDrugService', () => {
  let service: SearchDrugService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchDrugService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
