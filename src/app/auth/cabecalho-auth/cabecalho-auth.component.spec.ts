import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoAuthComponent } from './cabecalho-auth.component';

describe('CabecalhoAuthComponent', () => {
  let component: CabecalhoAuthComponent;
  let fixture: ComponentFixture<CabecalhoAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhoAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
