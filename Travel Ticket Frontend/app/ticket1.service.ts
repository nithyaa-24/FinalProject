import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from './bus';
import { BusSearchRequest } from './bussearchrequest';

@Injectable({
  providedIn: 'root',
})
export class Ticket1Sevice {
  private apiUrl = 'http://localhost:8282/buses';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  searchBuses(searchRequest: BusSearchRequest): Observable<Bus[]> {
    return this.http.post<Bus[]>(`${this.apiUrl}/search`, searchRequest);
  }
}