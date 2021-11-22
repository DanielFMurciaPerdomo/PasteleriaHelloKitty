import { TestBed } from '@angular/core/testing';

import { DecoracionEmpService } from './decoracion-emp.service';

describe('DecoracionEmpService', () => {
  let service: DecoracionEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecoracionEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
