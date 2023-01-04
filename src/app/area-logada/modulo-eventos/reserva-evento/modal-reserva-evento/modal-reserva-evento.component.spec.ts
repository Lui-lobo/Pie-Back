import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReservaEventoComponent } from './modal-reserva-evento.component';

describe('ModalReservaEventoComponent', () => {
  let component: ModalReservaEventoComponent;
  let fixture: ComponentFixture<ModalReservaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalReservaEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalReservaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
