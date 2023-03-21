import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPassEmailPageComponent } from './recover-pass-email-page.component';

describe('RecoverPassEmailPageComponent', () => {
  let component: RecoverPassEmailPageComponent;
  let fixture: ComponentFixture<RecoverPassEmailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverPassEmailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverPassEmailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
