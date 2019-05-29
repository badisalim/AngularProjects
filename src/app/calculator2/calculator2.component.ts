import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component {

  constructor() { }
  public num1: number;
  public num2: number;
  public result: number;

  add() {
    this.result = this.num1 + this.num2;
  }
  minus() {
    this.result = this.num1 - this.num2;
  }
  multiply() {
    this.result = this.num1 * this.num2;
  }
  devide() {
    this.result = (this.num1) / (this.num2);
  }

}
