/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdmissionService } from './admission.service';

describe('Service: Admission', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmissionService]
    });
  });

  it('should ...', inject([AdmissionService], (service: AdmissionService) => {
    expect(service).toBeTruthy();
  }));
});
