import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoInternoComponent } from './cabecalho-interno.component';

describe('CabecalhoInternoComponent', () => {
  let component: CabecalhoInternoComponent;
  let fixture: ComponentFixture<CabecalhoInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhoInternoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
