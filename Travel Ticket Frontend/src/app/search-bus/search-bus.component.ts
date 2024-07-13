import { Component, OnInit } from '@angular/core';
import { BusSearchRequest } from '../bussearchrequest';
import { Bus } from '../bus';
// import { Router } from '@angular/router';
import { Booking1 } from '../booking1';
import { BusService } from '../bus.service';
import { Booking1Service } from '../booking1.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket1Sevice } from '../ticket1.service';


@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css'],
})
export class SearchBusComponent implements OnInit {
  searchRequest: BusSearchRequest = {
    source: '',
    destination: '',
    arrivalDate: new Date(),
    departureDate: new Date(),
  };
  newBooking: Booking1 = new Booking1('', '', '', 0);

  buses: Bus[] = [];
  bookings: Booking1[] = [];
  errorMessage: string = '';
  booking1Id:number;

  constructor(
    private ticket1Service:Ticket1Sevice,
    private busService: BusService,
    private router: Router,
    private booking1Service:Booking1Service,
    private route:ActivatedRoute
    
  ) {}

  ngOnInit(): void {
    this.loadBookings(); // Load bookings on initialization
    this.route.queryParams.subscribe((params) => {
      this.booking1Id = +params['booking1Id'];
      // alert(this.trainId);
      // capture trainId from route
    });
  }

  onSearch(): void {
    this.ticket1Service.searchBuses(this.searchRequest).subscribe(
      (data: Bus[]) => {
        this.buses = data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'No buses found for the given criteria.';
        this.buses = [];
      }
    );
  }

  loadBookings(): void {
    this.booking1Service.getAllBusBookings().subscribe(
      (data: Booking1[]) => {
        this.bookings = data;
      },
      (error) => {
        console.error('Error loading bookings', error);
      }
    );
  }

  // addBooking(): void {
  //   this.busBookingService.addBusBooking(this.newBooking).subscribe(
  //     () => {
  //       this.loadBookings();
  //       this.newBooking = new BusBooking('', '', '', 0);
  //     },
  //     (error) => {
  //       console.error('Error adding booking', error);
  //     }
  //   );
  // }

  onBook(bus: Bus): void {
    this.router.navigate(['addbusbook'], {
      queryParams: { busId: bus.id, booking1Id:this.booking1Id },
    });
  }
}