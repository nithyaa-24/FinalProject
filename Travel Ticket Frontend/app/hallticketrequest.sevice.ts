import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HallTicketRequest } from './hallticketrequest';

@Injectable({
  providedIn: 'root'
})
export class HallTicketRequestService {
  private apiUrl = 'http://localhost:8282/api/hall-ticket-requests'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  requestHallTicket(request: HallTicketRequest): Observable<any> {
    const url = `${this.apiUrl}/request`;
    return this.http.post(url, request);
  }
}
