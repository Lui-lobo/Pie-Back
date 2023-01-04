import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoRefeicoesComponent } from './catalogo-refeicoes.component';

describe('CatalogoRefeicoesComponent', () => {
  let component: CatalogoRefeicoesComponent;
  let fixture: ComponentFixture<CatalogoRefeicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoRefeicoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoRefeicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
