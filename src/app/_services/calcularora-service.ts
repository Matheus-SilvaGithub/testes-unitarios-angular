import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalcularoraService {
  loggerService: any;

  constructor(loggerService: LoggerService) {}  

  calcular(operacao: string, num1: number, num2: number): number {
    switch (operacao) {
      case 'soma':
        return num1 + num2;
      case 'subtracao':
        return num1 - num2;
      case 'multiplicacao':
        return num1 * num2;
      case 'divisao':
        return num1 / num2;
      default:
        this.loggerService.log(`Operação inválida1: ${operacao}`);
        return 0;      
    }
  }
  
}
