import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoRefeicoesComponent } from './carrinho-refeicoes.component';

describe('CarrinhoRefeicoesComponent', () => {
  let component: CarrinhoRefeicoesComponent;
  let fixture: ComponentFixture<CarrinhoRefeicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoRefeicoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoRefeicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
