import { TestBed, inject } from '@angular/core/testing';

import { MycartService } from './mycart.service';

describe('MycartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MycartService]
    });
  });

  it('should be created', inject([MycartService], (service: MycartService) => {
    expect(service).toBeTruthy();
  }));
});
