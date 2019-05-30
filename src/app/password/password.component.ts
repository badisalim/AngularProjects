import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  checkPassword = (password1, password2) => {
    if (password1 === '' && password2 === '') {
      console.log("Please enter Password")
      return false;
    } else if (password1 !== password2) {
      return false;
    }
    return true;
  }

  isLargerThan8 = password => {
    return password.length > 8;
  }

  isNumber = password => {
    const regExp = /[0-9]/;
    return regExp.test(password);
  }

  isLowerCase = password => {
    const regExp = /[a-z]/;
    return regExp.test(password);
  }
  isUpperCase = password => {
    const regExp = /[A-Z]/;
    return regExp.test(password);
  }
  verification = (password1, password2) => {
    return this.checkPassword(password1, password2) && this.isLargerThan8(password1) && this.isNumber(password1) && this.isLowerCase(password1) && this.isUpperCase(password1) ? true : false;
  }
}
