import { TestBed, inject } from '@angular/core/testing';

import { ProductdetailsService } from './productdetails.service';

describe('ProductdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductdetailsService]
    });
  });

  it('should be created', inject([ProductdetailsService], (service: ProductdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
