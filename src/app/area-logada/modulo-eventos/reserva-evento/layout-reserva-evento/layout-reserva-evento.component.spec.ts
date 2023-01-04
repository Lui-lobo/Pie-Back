import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutReservaEventoComponent } from './layout-reserva-evento.component';

describe('LayoutReservaEventoComponent', () => {
  let component: LayoutReservaEventoComponent;
  let fixture: ComponentFixture<LayoutReservaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutReservaEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutReservaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
