import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmoduloRefeicoesComponent } from './submodulo-refeicoes.component';

describe('SubmoduloRefeicoesComponent', () => {
  let component: SubmoduloRefeicoesComponent;
  let fixture: ComponentFixture<SubmoduloRefeicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmoduloRefeicoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmoduloRefeicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
