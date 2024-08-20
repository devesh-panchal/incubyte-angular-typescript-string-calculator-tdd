import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }


  add(numbers: string): number {
    if (numbers === "")
      return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
      numbers = numbers.substring(delimiterEndIndex + 1);
    }
    const numArray = numbers.split(delimiter);
    return numArray.reduce((sum, current) => sum + parseInt(current), 0); // Handle comma-separated numbers 

  }

}
