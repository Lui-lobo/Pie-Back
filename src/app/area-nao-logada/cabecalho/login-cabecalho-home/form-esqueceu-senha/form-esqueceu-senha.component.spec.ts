import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEsqueceuSenhaComponent } from './form-esqueceu-senha.component';

describe('FormEsqueceuSenhaComponent', () => {
  let component: FormEsqueceuSenhaComponent;
  let fixture: ComponentFixture<FormEsqueceuSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEsqueceuSenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEsqueceuSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
