import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaEventoComponent } from './reserva-evento.component';

describe('ReservaEventoComponent', () => {
  let component: ReservaEventoComponent;
  let fixture: ComponentFixture<ReservaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
