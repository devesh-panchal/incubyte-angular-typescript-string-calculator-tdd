import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }


  add(numbers: string): number {
    if (numbers === "") 
      return 0;


    const delimiter = /,|\n/;
    const numArray = numbers.split(delimiter);
    return numArray.reduce((sum, current) => sum + parseInt(current), 0); // Handle comma-separated numbers 
  }

}
