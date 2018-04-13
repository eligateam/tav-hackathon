import { TestBed, inject } from '@angular/core/testing';

import { ParkServiceService } from './park-service.service';

describe('ParkServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkServiceService]
    });
  });

  it('should be created', inject([ParkServiceService], (service: ParkServiceService) => {
    expect(service).toBeTruthy();
  }));
});
