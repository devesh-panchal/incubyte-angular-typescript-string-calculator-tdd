import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }


  add(numbers: string): number {
    return 0; // Hardcoded to pass the first test
  }
 
}
