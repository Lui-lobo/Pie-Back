import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntasFrequentesHomeComponent } from './perguntas-frequentes-home.component';

describe('PerguntasFrequentesHomeComponent', () => {
  let component: PerguntasFrequentesHomeComponent;
  let fixture: ComponentFixture<PerguntasFrequentesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerguntasFrequentesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerguntasFrequentesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
