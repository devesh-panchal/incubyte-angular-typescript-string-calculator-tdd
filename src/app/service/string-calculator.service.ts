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
    const parsedNumbers = numArray.map(n => parseInt(n));

    const negativeNumbers = parsedNumbers.filter(n => n < 0 )

    console.log(negativeNumbers);

    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }


    return parsedNumbers.reduce((sum, current) => sum + current, 0);

  }

}
