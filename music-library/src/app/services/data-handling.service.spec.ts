import { TestBed, inject } from '@angular/core/testing';

import { DataHandlingService } from './data-handling.service';

describe('Service: DataHandling', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataHandlingService]
    });
  });

  it('should ...', inject([DataHandlingService], (service: DataHandlingService) => {
    expect(service).toBeTruthy();
  }));
});
