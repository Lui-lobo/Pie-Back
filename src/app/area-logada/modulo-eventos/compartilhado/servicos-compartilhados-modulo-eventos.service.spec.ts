/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicosCompartilhadosModuloEventosService } from './servicos-compartilhados-modulo-eventos.service';

describe('Service: ServicosCompartilhadosModuloEventos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicosCompartilhadosModuloEventosService]
    });
  });

  it('should ...', inject([ServicosCompartilhadosModuloEventosService], (service: ServicosCompartilhadosModuloEventosService) => {
    expect(service).toBeTruthy();
  }));
});
