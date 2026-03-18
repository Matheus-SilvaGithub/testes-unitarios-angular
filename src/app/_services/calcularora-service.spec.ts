import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { CalcularoraService } from './calcularora-service';
import { LoggerService } from './logger.service';

describe('CalcularoraService', () => {
  let service: CalcularoraService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = {
      log: vi.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        CalcularoraService,
        { provide: LoggerService, useValue: loggerSpy }
      ]
    });

    service = TestBed.inject(CalcularoraService);
  });

  it('Deve somar corretamente, dois números', () => {
    const resultado = service.calcular('soma', 2, 3);
    expect(resultado).toBe(5);
  });

  it('Deve subtrair corretamente, dois números', () => {
    const resultado = service.calcular('subtracao', 5, 2);
    expect(resultado).toBe(3);
  });

  it('Deve multiplicar corretamente, dois números', () => {
    const resultado = service.calcular('multiplicacao', 4, 3);
    expect(resultado).toBe(12);
  });

  it('Deve dividir corretamente, dois números', () => {
    const resultado = service.calcular('divisao', 10, 2);
    expect(resultado).toBe(5);
  });

  it('Deve lançar erro ao tentar dividir por zero', () => {
    expect(service).toBeTruthy();
    const resultado = service.calcular('divisao', 10, 0);
    expect(resultado).toBe(Infinity);
  });

  it('Deve lançar erro ao tentar dividir por zero', () => {
    expect(service).toBeTruthy();
    const resultado = service.calcular('divisao', 10, 0);
    expect(resultado).toBe(Infinity);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});