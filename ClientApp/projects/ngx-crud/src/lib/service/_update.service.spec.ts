/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateService } from './_update.service';

describe('Service: _update', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateService]
    });
  });

  it('should ...', inject([UpdateService], (service: UpdateService) => {
    expect(service).toBeTruthy();
  }));
});
