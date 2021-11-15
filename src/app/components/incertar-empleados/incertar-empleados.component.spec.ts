import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncertarEmpleadosComponent } from './incertar-empleados.component';

describe('IncertarEmpleadosComponent', () => {
  let component: IncertarEmpleadosComponent;
  let fixture: ComponentFixture<IncertarEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncertarEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncertarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
