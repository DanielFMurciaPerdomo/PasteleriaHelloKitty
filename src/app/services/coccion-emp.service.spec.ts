import { TestBed } from '@angular/core/testing';

import { CoccionEmpService } from './coccion-emp.service';

describe('CoccionEmpService', () => {
  let service: CoccionEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoccionEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
