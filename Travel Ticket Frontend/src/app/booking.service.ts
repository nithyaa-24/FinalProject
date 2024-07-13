import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private baseUrl = 'http://localhost:8282/books';

  constructor(private http: HttpClient) {}

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.baseUrl}/all`);
  }
  getBook(bookingId:number): Observable<Booking> {
    return this.http.get<Booking>(`${this.baseUrl}/getbooking/`+bookingId);
  }

  addBooking(booking: Booking, trainId: number): Observable<Booking> {
    return this.http.post<Booking>(`${this.baseUrl}/add/` + trainId, booking);
  }
  updateBooking(id: number, booking: Booking): Observable<Booking> {
    return this.http.put<Booking>(`${this.baseUrl}/update/${id}`, booking);
  }
}
