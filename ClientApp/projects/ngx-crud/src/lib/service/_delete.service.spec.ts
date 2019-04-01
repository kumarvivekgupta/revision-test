/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeleteService } from './_delete.service';

describe('Service: _delete', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteService]
    });
  });

  it('should ...', inject([DeleteService], (service: DeleteService) => {
    expect(service).toBeTruthy();
  }));
});
