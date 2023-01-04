import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoHomeComponent } from './contato-home.component';

describe('ContatoHomeComponent', () => {
  let component: ContatoHomeComponent;
  let fixture: ComponentFixture<ContatoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
