import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCadastroEventoComponent } from './lista-cadastro-evento.component';

describe('ListaCadastroEventoComponent', () => {
  let component: ListaCadastroEventoComponent;
  let fixture: ComponentFixture<ListaCadastroEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCadastroEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCadastroEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
