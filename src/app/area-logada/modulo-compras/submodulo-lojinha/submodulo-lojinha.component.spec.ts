import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmoduloLojinhaComponent } from './submodulo-lojinha.component';

describe('SubmoduloLojinhaComponent', () => {
  let component: SubmoduloLojinhaComponent;
  let fixture: ComponentFixture<SubmoduloLojinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmoduloLojinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmoduloLojinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
