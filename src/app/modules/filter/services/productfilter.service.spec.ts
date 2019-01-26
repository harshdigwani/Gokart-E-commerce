import { TestBed, inject } from '@angular/core/testing';

import { ProductfilterService } from './productfilter.service';

describe('ProductfilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductfilterService]
    });
  });

  it('should be created', inject([ProductfilterService], (service: ProductfilterService) => {
    expect(service).toBeTruthy();
  }));
});
