import { TestBed, inject } from '@angular/core/testing';

import { ModalStateService } from './modal-state.service';

describe('Service: ModalState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalStateService]
    });
  });

  it('should ...', inject([ModalStateService], (service: ModalStateService) => {
    expect(service).toBeTruthy();
  }));
});
