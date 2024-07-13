import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Search } from '../search';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  var_source:string="";
  var_destination:string="";
  var_arrivalDate:Date;
  var_departureDate:Date;
  search: Search = new Search();
  submitted = false;
  
  

  constructor( private http: HttpClient, private router:Router) {
    
  }
  ngOnInit(): void {
  }
  // searchTickets(): void {
  //   this.router.navigateByUrl('search');

  // searchTickets() {
  //   const { source, destination, arrivalDate, departureDate } = this.searchForm.value;
  //   this.http.post<any[]>(`http://localhost:8282/trains/search`, {
  //     params: { source, destination, arrivalDate, departureDate }
  //   }).subscribe(data => {
  //     this.tickets = data;
  //     this.gotoList();
  //   });

  // }
  onSubmit(source:string,destination:string, arrivalDate:Date, departureDate:Date){
    var search= {

      "source":source,
      "destination":destination,
      "arrivalDate":arrivalDate,
      "departureDate":departureDate,
    }
    console.log(search)
    this.http.post("http://localhost:8282/trains/search", search).subscribe(
      response => {
        console.log('API Response:', response);
        this.gotoList();
      },
      error => {
        console.error('API Error:', error);
        alert("Invalid Details");
      }
    );
  
  }
  gotoList() {
    this.router.navigate(['book']);
  }
}
