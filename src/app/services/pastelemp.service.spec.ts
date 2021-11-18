import { TestBed } from '@angular/core/testing';

import { PastelempService } from './pastelemp.service';

describe('PastelempService', () => {
  let service: PastelempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastelempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
