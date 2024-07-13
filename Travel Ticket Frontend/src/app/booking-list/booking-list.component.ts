// import { TDetailsComponent } from '../t-details/t-details.component';
import { Observable } from "rxjs";
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  bookings: Observable<Student[]>;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.bookings = this.studentService.getAllPendingStudents();
  }

  // approveStudent(id: number) {
  //   this.studentService.approveStudent(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }

  // rejectStudent(id: number) {
  //   this.studentService.rejectStudent(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }
}
