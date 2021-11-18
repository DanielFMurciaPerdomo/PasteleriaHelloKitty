import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDecoracionesComponent } from './formulario-decoraciones.component';

describe('FormularioDecoracionesComponent', () => {
  let component: FormularioDecoracionesComponent;
  let fixture: ComponentFixture<FormularioDecoracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDecoracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDecoracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
