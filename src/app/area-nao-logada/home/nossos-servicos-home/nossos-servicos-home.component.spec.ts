import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosServicosHomeComponent } from './nossos-servicos-home.component';

describe('NossosServicosHomeComponent', () => {
  let component: NossosServicosHomeComponent;
  let fixture: ComponentFixture<NossosServicosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NossosServicosHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NossosServicosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
