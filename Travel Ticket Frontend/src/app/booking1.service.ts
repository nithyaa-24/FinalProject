import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking1 } from './booking1';

@Injectable({
  providedIn: 'root',
})
export class Booking1Service {
  private baseUrl = 'http://localhost:8282/bus-bookings';

  constructor(private http: HttpClient) {}

  getAllBusBookings(): Observable<Booking1[]> {
    return this.http.get<Booking1[]>(`${this.baseUrl}/all`);
  }
  getBook(booking1Id:number): Observable<Booking1> {
    return this.http.get<Booking1>(`${this.baseUrl}/getBooking/`+booking1Id);
  }

  addBooking(booking1: Booking1, busId: number): Observable<Booking1> {
    return this.http.post<Booking1>(`${this.baseUrl}/add/` + busId, booking1);
  }
  updateBooking(id: number, booking1: Booking1): Observable<Booking1> {
    return this.http.put<Booking1>(`${this.baseUrl}/update/${id}`, booking1);
  }
}
