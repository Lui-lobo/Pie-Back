import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLojinhaComponent } from './cadastro-lojinha.component';

describe('CadastroLojinhaComponent', () => {
  let component: CadastroLojinhaComponent;
  let fixture: ComponentFixture<CadastroLojinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroLojinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroLojinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
