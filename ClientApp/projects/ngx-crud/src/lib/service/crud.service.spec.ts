/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrudService } from './crud.service';

describe('Service: Data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudService]
    });
  });

  it('should ...', inject([CrudService], (service: CrudService) => {
    expect(service).toBeTruthy();
  }));
});
