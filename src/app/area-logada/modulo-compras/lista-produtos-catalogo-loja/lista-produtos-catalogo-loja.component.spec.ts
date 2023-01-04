import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutosCatalogoLojaComponent } from './lista-produtos-catalogo-loja.component';

describe('ListaProdutosCatalogoLojaComponent', () => {
  let component: ListaProdutosCatalogoLojaComponent;
  let fixture: ComponentFixture<ListaProdutosCatalogoLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProdutosCatalogoLojaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProdutosCatalogoLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
