import { TestBed, inject } from '@angular/core/testing';

import { DataActionsService } from './data-actions.service';

describe('Service: DataActions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataActionsService]
    });
  });

  it('should ...', inject([DataActionsService], (service: DataActionsService) => {
    expect(service).toBeTruthy();
  }));
});
