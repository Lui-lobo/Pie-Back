import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReservaEventoComponent } from './lista-reserva-evento.component';

describe('ListaReservaEventoComponent', () => {
  let component: ListaReservaEventoComponent;
  let fixture: ComponentFixture<ListaReservaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaReservaEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaReservaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
