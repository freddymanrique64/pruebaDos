import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioTresComponent } from './ejercicio-tres.component';

describe('EjercicioTresComponent', () => {
  let component: EjercicioTresComponent;
  let fixture: ComponentFixture<EjercicioTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
