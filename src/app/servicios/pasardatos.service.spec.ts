import { TestBed } from '@angular/core/testing';

import { PasardatosService } from './pasardatos.service';

describe('PasardatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasardatosService = TestBed.get(PasardatosService);
    expect(service).toBeTruthy();
  });
});
