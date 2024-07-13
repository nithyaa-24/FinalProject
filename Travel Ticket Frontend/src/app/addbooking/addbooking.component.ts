import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { Booking } from '../booking';

@Component({
  selector: 'app-addbooking',
  templateUrl: './addbooking.component.html',
  styleUrls: ['./addbooking.component.css'],
})
export class AddBookingComponent implements OnInit {
  booking: Booking = new Booking('', '', '', 0);
  trainId: number;
  bookingId:number;

  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.trainId = +params['trainId'];
      this.bookingId = +params['bookingId'];
      // alert(this.trainId);
      // capture trainId from route
    });
  }

  onSubmit() {
    this.booking.id=this.bookingId;
    this.bookingService.addBooking(this.booking, this.trainId).subscribe(
      (response: any) => {
        console.log('Booking added', response);
        alert('booking done successfully');
        this.booking = response;
        this.gotoList(this.booking.id);
      },
      (error) => {
        console.error('Error adding booking', error);
      }
    );
  }
  gotoList(bookingId:number) {
    this.router.navigate(['ticketconformation'], {
      queryParams: { bookingId: bookingId },
    });
  }
}
