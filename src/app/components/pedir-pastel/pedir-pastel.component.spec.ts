import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirPastelComponent } from './pedir-pastel.component';

describe('PedirPastelComponent', () => {
  let component: PedirPastelComponent;
  let fixture: ComponentFixture<PedirPastelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedirPastelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirPastelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
