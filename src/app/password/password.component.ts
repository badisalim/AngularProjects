<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';
import { FormBuilder, Form, FormGroup } from '@angular/forms';
=======
import { Component, OnInit } from "@angular/core";
import { isNumber } from "util";
import { FormBuilder, Form, FormGroup } from "@angular/forms";
>>>>>>> e874036f5ff22b804f8d2ee7e1cefb71ddfb9372

@Component({
  selector: "app-password",
  templateUrl: "./password.component.html",
  styleUrls: ["./password.component.css"]
})
export class PasswordComponent implements OnInit {
  form: FormGroup;
  edited = false;
<<<<<<< HEAD
  passwordMessage = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      password1: [''],
=======
  passwordMessage = "";
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      password1: [""],
>>>>>>> e874036f5ff22b804f8d2ee7e1cefb71ddfb9372
      password2: []
    });
  }
  checkPassword(password1, password2) {
<<<<<<< HEAD
    if (password1 === '' && password2 === '') {
      console.log('Please enter Password');
=======
    if (password1 === "" && password2 === "") {
      console.log("Please enter Password");
>>>>>>> e874036f5ff22b804f8d2ee7e1cefb71ddfb9372
      return false;
    } else if (password1 !== password2) {
      return false;
    }
    return true;
  }

  isLargerThan8(password) {
    return password.length > 8;
  }

  isNumber(password) {
    const regExp = /[0-9]/;
    return regExp.test(password);
  }

  isLowerCase(password) {
    const regExp = /[a-z]/;
    return regExp.test(password);
  }
  isUpperCase(password) {
    const regExp = /[A-Z]/;
    return regExp.test(password);
  }
  submit() {
    const { password1, password2 } = this.form.value;
    if (
      this.checkPassword(password1, password2) &&
      this.isLargerThan8(password1) &&
      isNumber(password1) &&
      this.isLowerCase(password1) &&
      this.isUpperCase(password1)
    ) {
<<<<<<< HEAD
      this.passwordMessage = 'Password OK';
    } else {
      this.passwordMessage = 'Password not OK';
=======
      this.passwordMessage = "Password OK";
    } else {
      this.passwordMessage = "Password not OK";
>>>>>>> e874036f5ff22b804f8d2ee7e1cefb71ddfb9372
    }
  }
}
