import { TestBed } from '@angular/core/testing';

import { EncontrarUsuarioService } from './encontrar-usuario.service';

describe('EncontrarUsuarioService', () => {
  let service: EncontrarUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncontrarUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
