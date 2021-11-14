import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPastelComponent } from './formulario-pastel.component';

describe('FormularioPastelComponent', () => {
  let component: FormularioPastelComponent;
  let fixture: ComponentFixture<FormularioPastelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPastelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPastelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
