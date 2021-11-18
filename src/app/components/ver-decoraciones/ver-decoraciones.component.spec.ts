import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDecoracionesComponent } from './ver-decoraciones.component';

describe('VerDecoracionesComponent', () => {
  let component: VerDecoracionesComponent;
  let fixture: ComponentFixture<VerDecoracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDecoracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDecoracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
