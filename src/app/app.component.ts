import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tdForm';

  @ViewChild("signUp") signUp !: NgForm;
  mocArr= [
    {contactMode:'Email',id:123},
    {contactMode:'Phone',id :124}
  ]

  userDetails={
    "userInfo":{
      "username":"priyanka nirgude",
      "email":"pri@gmailcom"
    },
    "secretQuestion":"favourateColor",
    "answer":"black",
    "isSubscribed":true,
    "modeofcontact":"Email"
  }
  constructor(){

  }

 ngOnInit(): void {
   
 }

  onSignUp(signUp : NgForm){
    
     // console.log(signUp.valid);
      //console.log(signUp);
      console.log(signUp.value);
    
  }


  onEdit(){
    this.signUp.form.patchValue(this.userDetails)
  }
}
