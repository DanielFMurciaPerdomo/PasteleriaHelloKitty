import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCoccionComponent } from './ver-coccion.component';

describe('VerCoccionComponent', () => {
  let component: VerCoccionComponent;
  let fixture: ComponentFixture<VerCoccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCoccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCoccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
