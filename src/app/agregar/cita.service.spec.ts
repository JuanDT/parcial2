import { TestBed } from '@angular/core/testing';

import { CitaService } from './cita.service';

describe('cita', () => {
  let service: CitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
