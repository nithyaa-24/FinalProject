import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {  OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  name='Angular ' +VERSION.major;
  showHeader: boolean=true;
  title = ' Hall Ticket Generation Application';
  
  
constructor(private router:Router){
  router.events.subscribe((val)=>{
    if(val instanceof NavigationEnd){
      if(val.url=='/' || val.url=='/userlogin' ||val.url=='/joinus' || val.url=='/landing'){
        this.showHeader=false;
      }else{
        this.showHeader=true;
      }
    }
  });
}


    
}
