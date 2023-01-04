import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoLojinhaComponent } from './carrinho-lojinha.component';

describe('CarrinhoLojinhaComponent', () => {
  let component: CarrinhoLojinhaComponent;
  let fixture: ComponentFixture<CarrinhoLojinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoLojinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoLojinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
