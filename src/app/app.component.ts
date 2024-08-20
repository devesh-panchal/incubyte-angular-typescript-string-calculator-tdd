import { Component, OnInit } from '@angular/core';
import { StringCalculatorService } from './service/string-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'incubyte angular typescript string calculator tdd';

  constructor(public stringCalculator: StringCalculatorService) {

  }



}
