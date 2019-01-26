import { TestBed, inject } from '@angular/core/testing';

import { AccountdetailsService } from './accountdetails.service';

describe('AccountdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountdetailsService]
    });
  });

  it('should be created', inject([AccountdetailsService], (service: AccountdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
