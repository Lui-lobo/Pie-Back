import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoLojinhaComponent } from './catalogo-lojinha.component';

describe('CatalogoLojinhaComponent', () => {
  let component: CatalogoLojinhaComponent;
  let fixture: ComponentFixture<CatalogoLojinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoLojinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoLojinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
