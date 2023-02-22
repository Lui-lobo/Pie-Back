import { TestBed } from '@angular/core/testing';

import { PrimeiroAcessoService } from './primeiro-acesso.service';

describe('PrimeiroAcessoService', () => {
  let service: PrimeiroAcessoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeiroAcessoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
