import { TestBed, inject } from '@angular/core/testing';

import { MywishlistService } from './mywishlist.service';

describe('MywishlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MywishlistService]
    });
  });

  it('should be created', inject([MywishlistService], (service: MywishlistService) => {
    expect(service).toBeTruthy();
  }));
});
