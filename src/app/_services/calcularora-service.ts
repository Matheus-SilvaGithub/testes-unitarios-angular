import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalcularoraService {

  constructor() {}  

  calcular(operacao: string, num1: number, num2: number): number {
    switch (operacao) {
      case 'soma':
        return num1 + num2;
      case 'subtracao':
        return num1 - num2;
      case 'multiplicacao':
        return num1 * num2;
      case 'divisao':
        if (num2 === 0) {
          throw new Error('Divisão por zero não é permitida.');
        }
        return num1 / num2;
      default:
        throw new Error('Operação inválida.');
    }
  }
  
}
