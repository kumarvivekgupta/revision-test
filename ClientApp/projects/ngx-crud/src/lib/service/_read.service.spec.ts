/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ReadService } from './_read.service';

describe('Service: _read', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadService]
    });
  });

  it('should ...', inject([ReadService], (service: ReadService) => {
    expect(service).toBeTruthy();
  }));
});
