import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';
import { TicketSearchRequest } from './ticketsearchrequest';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl = 'http://localhost:8282/trains';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  
  searchTrains(request: TicketSearchRequest): Observable<Ticket[]> {
    return this.http.post<Ticket[]>(`${this.baseUrl}/search`, request, this.httpOptions);
  }


}
