import { TestBed } from '@angular/core/testing';

import { ServicosCompartilhadosService } from './servicos-compartilhados.service';

describe('ServicosCompartilhadosService', () => {
  let service: ServicosCompartilhadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicosCompartilhadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
