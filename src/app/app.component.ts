import { Component, OnInit } from '@angular/core';
import { StringCalculatorService } from './service/string-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stringCalCulator!: string;

  title = 'incubyte angular typescript string calculator tdd';
  answer: number | undefined;
  showError: any;
  errorMessage: string | undefined;

  constructor(public stringCalculator: StringCalculatorService) {

    this.title=this.title.split(" ").map(word=>word.split("").reverse().join("")).join(" ")



  }

  calculate(){

    this.answer=undefined
    this.showError=false


    console.log(this.stringCalCulator);


    try {
      this.answer = this.stringCalculator.add(this.stringCalCulator)

    } catch (error:any) {
      this.showError=true
      this.errorMessage=error
    }

    console.log("answer",this.answer);
    
    
  }



}
