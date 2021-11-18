import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCoccionComponent } from './formulario-coccion.component';

describe('FormularioCoccionComponent', () => {
  let component: FormularioCoccionComponent;
  let fixture: ComponentFixture<FormularioCoccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCoccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCoccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
