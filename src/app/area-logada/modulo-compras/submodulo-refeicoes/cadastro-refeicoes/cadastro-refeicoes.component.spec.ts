import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRefeicoesComponent } from './cadastro-refeicoes.component';

describe('CadastroRefeicoesComponent', () => {
  let component: CadastroRefeicoesComponent;
  let fixture: ComponentFixture<CadastroRefeicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroRefeicoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroRefeicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
