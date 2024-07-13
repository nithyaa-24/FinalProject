import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { Booking } from '../booking';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-ticketconformation',
  templateUrl: './ticketconformation.component.html',
  styleUrls: ['./ticketconformation.component.css'],
})
export class TicketconformationComponent implements OnInit {
  bookingId: number;
  // booking: Booking = new Booking('', '', '', 0);
  booking:any;
  
  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.bookingId = +params['bookingId'];
      // alert(this.bookingId);
      this.onSubmit();
      // capture trainId from route
    });
  }
  onSubmit() {
  
    this.bookingService.getBook(this.bookingId).subscribe(
      (response) => {
        this.booking = response;
        console.log('Booking added', response);
        
      },
      (error) => {
        console.error('Error adding booking', error);
      }
    );
  }
  downloadReceipt() {
    const doc = new jsPDF();
    doc.text('Booking Receipt', 10, 10);
    doc.text(`Booking ID: ${this.booking.id}`, 10, 20);
    doc.text(`Train Fare: ${this.booking.train.trainFare}`, 10, 30);
    doc.text(`Passenger Name: ${this.booking.fullName}`, 10, 40);
    doc.text(`Passenger Mobile Number: ${this.booking.mobile}`, 10, 50);
  doc.text(`Departure Date: ${this.booking.train.departureDate}`, 10, 60);
  doc.text(`Arrival Time: ${this.booking.train.arrivalDate}`, 10, 70);
  doc.text(`Source: ${this.booking.train.source}`, 10, 80);
  doc.text(`Destination: ${this.booking.train.destination}`, 10, 90);
    doc.save(`Booking_Receipt_${this.booking.id}.pdf`);
  }
  onPrint(){
    this.downloadReceipt();
  }
  onUpdate(): void {
    if (this.booking) {
      
      this.router.navigate(['search'], {
        queryParams: {
          bookingId: this.booking.id,
          source: this.booking.train.source,
          destination: this.booking.train.destination,
          departureDate: this.booking.train.departureDate,
          arrivalDate: this.booking.train.arrivalDate,
        }
      });
    } else {
      console.error('No booking details available to update');
    }
  }

  
}


