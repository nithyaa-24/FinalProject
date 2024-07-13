import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Train } from './train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  private baseUrl = 'http://localhost:8282/trains';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  addTrain(train: Train): Observable<Train> {
    return this.http.post<Train>(`${this.baseUrl}/add`, train, this.httpOptions);
  }

  getAllTrains(): Observable<Train[]> {
    return this.http.get<Train[]>(`${this.baseUrl}/all`);
  }

  deleteTrain(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  updateTrain(id: number, train: Train): Observable<Train> {
    return this.http.put<Train>(`${this.baseUrl}/update/${id}`, train, this.httpOptions);
  }
}
