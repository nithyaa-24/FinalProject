import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Register } from '../Register';
@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinUsComponent implements OnInit {
  signup: Register = new Register();
  submitted = false;

  constructor(public http:HttpClient, private router: Router) { }
  var_role:string="";
  var_fullname:string="";
  var_mobilenumber:string="";
  var_email:string="";
  var_password:string="";
  
  // var_document=""

  

  onSubmit(role:string,fullname:string,mobilenumber:string,email:string,password:string){
    // alert(this.var_fullname)
    var signup = {
      "role":role,
      "fullname":fullname,
      "mobilenumber":mobilenumber,
      "email":email,
      "password":password,
     
      // "document":this.var_document
    }

    // alert(JSON.stringify(aplicant));

    //we arev sending data to server springboot app

    this.http.post<any>("http://localhost:8282/add-user",signup).subscribe(data=>{

    alert("data sent successfully");
    this.gotoList();
    });
  }






  // constructor(private bookingService: BookingService,
  //   private router: Router) { }

  ngOnInit() {
  }

  newBooking(): void {
    this.submitted = false;
    this.signup = new Register();
  }
  gotoList() {
    this.router.navigate(['login']);
  }

}