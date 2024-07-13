import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from '../booking';
import { Booking1Service } from '../booking1.service';
import { Booking1 } from '../booking1';

@Component({
  selector: 'app-provider-dashboard',
  templateUrl: './provider-dashboard.component.html',
  styleUrls: ['./provider-dashboard.component.css']
})
export class ProviderDashboardComponent implements OnInit {
  bookings: Booking[];
  busBookings: Booking1[];

  constructor(
    private bookingService: BookingService,
    private booking1Service: Booking1Service
  ) { }

  ngOnInit(): void {
    this.loadBookings();
    this.loadBusBookings();
  }

  loadBookings() {
    this.bookingService.getAllBookings().subscribe(
      (response) => {
        this.bookings = response;
        console.log('Train bookings loaded', response);
      },
      (error) => {
        console.error('Error loading train bookings', error);
      }
    );
  }

  loadBusBookings() {
    this.booking1Service.getAllBusBookings().subscribe(
      (response) => {
        this.busBookings = response;
        console.log('Bus bookings loaded', response);
      },
      (error) => {
        console.error('Error loading bus bookings', error);
      }
    );
  }
}
