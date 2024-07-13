import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.gotoList();

  }
  onBus(){
    this.router.navigate(['/searchbus']);
  }

  gotoList(){
    // if()
    this.router.navigate(['search']);
  }
}
