import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroProdutosComponent } from './form-cadastro-produtos.component';

describe('FormCadastroProdutosComponent', () => {
  let component: FormCadastroProdutosComponent;
  let fixture: ComponentFixture<FormCadastroProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCadastroProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCadastroProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
