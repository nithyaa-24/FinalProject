import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { TicketComponent } from '../ticket/ticket.component';
import { TicketSearchRequest } from '../ticketsearchrequest';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { Booking1 } from '../booking1';
import { Booking1Service } from '../booking1.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
ticket:Ticket;
trains: Ticket[] = [];
booking:Booking[];
busBookings:Booking1[];
  constructor(private bookingService: BookingService, private booking1Service:Booking1Service) { }
  ngOnInit(): void {
    this.loadBookings();
    this.loadBusBookings();
    
  }
  loadBookings() {
  
    this.bookingService.getAllBookings().subscribe(
      (response) => {
        this.booking = response;
        console.log('Booking added', response);
        
      },
      (error) => {
        console.error('Error adding booking', error);
      }
    );
  }

  loadBusBookings() {
  
    this.booking1Service.getAllBusBookings().subscribe(
      (response) => {
        this.busBookings = response;
        console.log('Booking added', response);
        
      },
      (error) => {
        console.error('Error adding booking', error);
      }
    );
  }

}
