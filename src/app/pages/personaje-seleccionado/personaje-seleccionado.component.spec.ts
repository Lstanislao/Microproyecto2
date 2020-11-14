import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeSeleccionadoComponent } from './personaje-seleccionado.component';

describe('PersonajeSeleccionadoComponent', () => {
  let component: PersonajeSeleccionadoComponent;
  let fixture: ComponentFixture<PersonajeSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajeSeleccionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
