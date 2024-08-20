import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }


  add(numbers: string): number {
    if (numbers === "")
      return 0;

    const [delimiter, numberString] = this.extractDelimiter(numbers);

    const parsedNumbers = this.parseNumbers(numberString, delimiter);

    this.checkForNegatives(parsedNumbers)

    return parsedNumbers.reduce((sum, current) => sum + current, 0);

  }

  extractDelimiter(numbers: string): [RegExp, string] {

    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
      numbers = numbers.substring(delimiterEndIndex + 1);
    }

    return [delimiter, numbers]

  }

  parseNumbers(numbers: string, delimiter: RegExp): number[] {

    const numArray = numbers.split(delimiter).map(n => parseInt(n));
    return numArray

  }

  checkForNegatives(parsedNumbers: number[]): void {

    const negativeNumbers = parsedNumbers.filter(n => n < 0)

    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

  }

}
