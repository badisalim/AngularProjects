import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}







  // number1: number;
  // number2: number;
  // display: string = "";
  // result: number;
  // answer: string;


  // add(number1, number2) {
  //   this.display = number1 + number2.toString;
  // }
  // minus(number1, number2) {
  //   this.display = number1 - number2.toString;
  // }
  // multiply(number1, number2) {
  //   this.display = number1 * number2.toString;
  // }
  // devide(number1, number2) {
  //   this.display = number1 / number2.toString;
  // }

  // setCalculation(value: string) {
  //   switch (value) {
  //     case "+":
  //       this.number1 = parseInt(this.display);
  //       this.display = this.number1.toString() + value;
  //       break;
  //   }
  //   console.log(this.number1);
  // }

  // setValue(value: String) {
  //   this.display += value.toString();
  // }

  // calculate() {
  //   const regex = /(\+|\-|\*|\/)/g;

  //   switch (true) {
  //     case (this.display.match(regex).length > 0):
  //       this.translateCalculation(this.display.match(regex)[0]);
  //       break;
  //   }
  // }

  // translateCalculation(operator: string) {
  //   const num1 = this.display.split(operator)[0];
  //   const num2 = this.display.split(operator)[0];
  //   switch (operator) {
  //     case "+":
  //       this.add(num1, num2);
  //       break;
  //   }
  // }



