import { Component, OnInit } from '@angular/core';
import { Booking1 } from '../booking1';
import { Booking1Service } from '../booking1.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addbusbooking',
  templateUrl: './addbusbooking.component.html',
  styleUrls: ['./addbusbooking.component.css']
})
export class AddbusbookingComponent implements OnInit {
  booking1: Booking1 = new Booking1('', '', '', 0);
  busId: number;
  booking1Id:number;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private booking1Service:Booking1Service
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.busId = +params['busId'];
      this.booking1Id = +params['booking1Id'];
      // alert(this.trainId);
      // capture trainId from route
    });
  }

  onSubmit() {
    this.booking1.id=this.booking1Id;
    this.booking1Service.addBooking(this.booking1, this.busId).subscribe(
      (response: any) => {
        console.log('Booking added', response);
        alert('booking done successfully');
        this.booking1 = response;
        this.gotoList(this.booking1.id);
      },
      (error) => {
        console.error('Error adding booking', error);
      }
    );
  }
  gotoList(booking1Id:number) {
    this.router.navigate(['busticketconfirm'], {
      queryParams: { booking1Id: booking1Id },
    });
  }
}

