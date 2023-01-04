import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluiProdutoComponent } from './modal-exclui-produto.component';

describe('ModalExcluiProdutoComponent', () => {
  let component: ModalExcluiProdutoComponent;
  let fixture: ComponentFixture<ModalExcluiProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExcluiProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExcluiProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
