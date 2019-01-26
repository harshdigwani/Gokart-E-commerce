import { TestBed, inject } from '@angular/core/testing';

import { CategoryfilterService } from './categoryfilter.service';

describe('CategoryfilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryfilterService]
    });
  });

  it('should be created', inject([CategoryfilterService], (service: CategoryfilterService) => {
    expect(service).toBeTruthy();
  }));
});
