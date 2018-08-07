import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  login_form: FormGroup;
  user_data: FormGroup;
  genders =["male","female"];

  ngOnInit(){
    this.login_form = new FormGroup({
      'user_data' : new FormGroup({
        'user_name' : new FormControl('',Validators.required),
        'email' : new FormControl('',[Validators.required,Validators.email])
      }),
       gender : new FormControl('male')
    });
  }

  onSubmit(){
    console.log(this.login_form);
  }
}
