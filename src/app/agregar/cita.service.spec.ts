import { TestBed } from '@angular/core/testing';

import { TarjetaService } from './cita.service';

describe('cita', () => {
  let service: TarjetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarjetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
