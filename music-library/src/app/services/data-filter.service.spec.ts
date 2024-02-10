import { TestBed, inject } from '@angular/core/testing';

import { DataFilterService } from './data-filter.service';

describe('Service: DataFilter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataFilterService]
    });
  });

  it('should ...', inject([DataFilterService], (service: DataFilterService) => {
    expect(service).toBeTruthy();
  }));
});