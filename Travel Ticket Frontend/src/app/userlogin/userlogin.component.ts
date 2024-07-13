import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../Login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserLoginComponent implements OnInit {
  var_email:string="";
  var_password:string="";
  login: Login = new Login();
  submitted = false;

  constructor(public http:HttpClient, private router: Router) { 
  }


  ngOnInit(): void {
  }
  onSubmit(loginEmail:string,loginPassword:string){
    var login= {

      "email":loginEmail,
      "password":loginPassword
     
      // "document":this.var_document
    }

    // alert(JSON.stringify(aplicant));

    //we arev sending data to server springboot app
    console.log(login)
    this.http.post("http://localhost:8282/login", login).subscribe(
      (response:any) => {
        console.log('API Response:', response);
        var role=response.role;
        if(role=='user'){
          this.router.navigate(['about']);
          // this.router.navigate(['search']);
        }
        else if(role=='admin'){
                this.router.navigate(['admin']);
        }
        else if(role=='provider'){
          this.router.navigate(['provider'])
        }
        // this.gotoList();
      },
      error => {
        console.error('API Error:', error);
        alert("Invalid Login Details");
      }
    );
  
  }
  // gotoList() {
  //   this.router.navigate(['about']);
  // }

}