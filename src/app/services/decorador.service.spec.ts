import { TestBed } from '@angular/core/testing';

import { DecoradorService } from './decorador.service';

describe('DecoradorService', () => {
  let service: DecoradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecoradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
