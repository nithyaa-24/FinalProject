import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking1Service } from '../booking1.service';
import { Booking } from '../booking';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-busticketconfirmation',
  templateUrl: './busticketconfirmation.component.html',
  styleUrls: ['./busticketconfirmation.component.css'],
})
export class BusticketconfirmationComponent implements OnInit {
  booking1Id: number;
  booking1: any; // Adjust fields as per your BusBooking model
  
  constructor(
    private booking1Service: Booking1Service,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.booking1Id = +params['booking1Id'];
      this.onSubmit();
    });
  }

  onSubmit() {
    this.booking1Service.getBook(this.booking1Id).subscribe(
      (response) => {
        this.booking1 = response;
        console.log('Booking fetched', response);
      },
      (error) => {
        console.error('Error fetching booking', error);
      }
    );
  }
  downloadReceipt() {
    const doc = new jsPDF();
    doc.text('Booking Receipt', 10, 10);
    doc.text(`Booking ID: ${this.booking1.id}`, 10, 20);
    doc.text(`Bus Fare: ${this.booking1.bus.busFare}`, 10, 30);
    doc.text(`Passenger Name: ${this.booking1.fullName}`, 10, 40);
    doc.text(`Passenger Mobile Number: ${this.booking1.mobile}`, 10, 50);
  doc.text(`Departure Date: ${this.booking1.bus.departureDate}`, 10, 60);
  doc.text(`Arrival Time: ${this.booking1.bus.arrivalDate}`, 10, 70);
  doc.text(`Source: ${this.booking1.bus.source}`, 10, 80);
  doc.text(`Destination: ${this.booking1.bus.destination}`, 10, 90);
    doc.save(`Booking_Receipt_${this.booking1.id}.pdf`);
  }
  
  onPrint() {
    this.downloadReceipt();
  }

  onUpdate(): void {
    if (this.booking1) {
      this.router.navigate(['searchbus'], {
        queryParams: {
          booking1Id: this.booking1.id,
          source: this.booking1.bus.source,
          destination: this.booking1.bus.destination,
          departureDate: this.booking1.bus.departureDate,
          arrivalDate: this.booking1.bus.arrivalDate,
        }
      });
    } else {
      console.error('No booking details available to update');
    }
  }
}