import { TestBed, inject } from '@angular/core/testing';

import { SubcategoryService } from './subcategory.service';

describe('SubcategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubcategoryService]
    });
  });

  it('should be created', inject([SubcategoryService], (service: SubcategoryService) => {
    expect(service).toBeTruthy();
  }));
});
