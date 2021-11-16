import { TestBed } from '@angular/core/testing';

import { PasteleroService } from './pastelero.service';

describe('PasteleroService', () => {
  let service: PasteleroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasteleroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
