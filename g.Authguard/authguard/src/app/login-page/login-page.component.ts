import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private route: Router) { 
    this.loginForm = new FormGroup({
      userID: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {
  }

  submit(){
    localStorage.setItem('userID',this.loginForm.controls.userID.value);
    localStorage.setItem('password',this.loginForm.controls.password.value);
    //localStorage.setItem("key" , JSON.stringify(this.loginForm.value));
    this.route.navigate(['/view']);
  }

}
