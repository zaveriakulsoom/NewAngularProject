import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Login } from '../login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login1=new Login();
  
  constructor(
    private httpClient : HttpClient,
    private _service:LoginService,private router: Router

    
   ) { 
 
   }
  
  ngOnInit(): void {

  }
  
  loginUser(){
    this._service.loginForm(this.login1).subscribe(
      data =>{
        console.log("response received");
        console.log(data);
        this.router.navigate(['/main-page'],{
          skipLocationChange : true,
          queryParams : {
            data : JSON.stringify(data)
          }
          
        });
        localStorage.setItem("jwtToken" , data.token)
      },
      error =>{
        console.log("Bad credentials");
        //this.errormsg="Please Enter Correct Username or Password";
      }
    )
  }
 
}


