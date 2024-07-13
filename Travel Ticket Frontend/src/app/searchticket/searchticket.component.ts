import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
import { TicketSearchRequest } from '../ticketsearchrequest';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchticket',
  templateUrl: './searchticket.component.html',
  styleUrls: ['./searchticket.component.css'],
})
export class SearchTicketComponent implements OnInit {
  searchRequest: TicketSearchRequest = {
    source: '',
    destination: '',
    arrivalDate: new Date(),
    departureDate: new Date(),
  };
  newBooking: Booking = new Booking('', '', '', 0);

  trains: Ticket[] = [];
  bookings: Booking[] = [];
  errorMessage: string = '';
  bookingId:number;

  constructor(
    private ticketService: TicketService,
    private router: Router,
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadBookings(); // Load bookings on initialization
    this.route.queryParams.subscribe((params) => {
      this.bookingId = +params['bookingId'];
      // alert(this.trainId);
      // capture trainId from route
    });
  }

  onSearch(): void {
    if(this.searchRequest.source==''|| this.searchRequest.destination==''  ){
      alert('mandatory fields missing');
      return;
    }
    this.ticketService.searchTrains(this.searchRequest).subscribe(
      (data: Ticket[]) => {
        this.trains = data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'No trains found for the given criteria.';
        this.trains = [];
      }
    );
  }

  loadBookings(): void {
    this.bookingService.getAllBookings().subscribe(
      (data: Booking[]) => {
        this.bookings = data;
      },
      (error) => {
        console.error('Error loading bookings', error);
      }
    );
  }

  // addBooking(): void {
  //   this.bookingService.addBooking(this.newBooking).subscribe(
  //     () => {
  //       this.loadBookings();
  //       this.newBooking = new Booking('', '', '', 0);
  //     },
  //     (error) => {
  //       console.error('Error adding booking', error);
  //     }
  //   );
  // }

  onBook(train: Ticket): void {
    this.router.navigate(['addbooking'], {
      queryParams: { trainId: train.id, bookingId:this.bookingId },
    });
  }
  onBus(){
    this.router.navigate(['/searchbus']);
  }
}
