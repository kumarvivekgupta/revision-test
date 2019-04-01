/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimpleCrudService } from './simpleCrud.service';

describe('Service: SimpleCrud', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleCrudService]
    });
  });

  it('should ...', inject([SimpleCrudService], (service: SimpleCrudService) => {
    expect(service).toBeTruthy();
  }));
});
