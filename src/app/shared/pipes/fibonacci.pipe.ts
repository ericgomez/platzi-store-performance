import { Pipe, PipeTransform } from '@angular/core';

// Funcion para calcular el fibonacci de un numero
const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Pipe({
  name: 'fibonacci',
})
export class FibonacciPipe implements PipeTransform {

  transform(value: number): any {
    console.log('calc');
    return fibonacci(value);
  }

}
