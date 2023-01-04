import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCadastroEventoComponent } from './layout-cadastro-evento.component';

describe('LayoutEventoComponent', () => {
  let component: LayoutCadastroEventoComponent;
  let fixture: ComponentFixture<LayoutCadastroEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutCadastroEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutCadastroEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
