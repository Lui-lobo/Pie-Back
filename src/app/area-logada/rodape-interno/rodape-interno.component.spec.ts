import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeInternoComponent } from './rodape-interno.component';

describe('RodapeInternoComponent', () => {
  let component: RodapeInternoComponent;
  let fixture: ComponentFixture<RodapeInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodapeInternoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodapeInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
