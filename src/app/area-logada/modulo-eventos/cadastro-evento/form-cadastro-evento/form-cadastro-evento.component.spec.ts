import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroEventoComponent } from './form-cadastro-evento.component';

describe('FormCadastroEventoComponent', () => {
  let component: FormCadastroEventoComponent;
  let fixture: ComponentFixture<FormCadastroEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCadastroEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCadastroEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
