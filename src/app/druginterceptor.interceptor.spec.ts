import { TestBed } from '@angular/core/testing';

import { DruginterceptorInterceptor } from './druginterceptor.interceptor';

describe('DruginterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DruginterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DruginterceptorInterceptor = TestBed.inject(DruginterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
