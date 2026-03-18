import { TestBed } from '@angular/core/testing';

import { CalcularoraService } from './calcularora-service';

describe('CalcularoraService', () => {
  let service: CalcularoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [CalcularoraService]
    });
    service = TestBed.inject(CalcularoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
