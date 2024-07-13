import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8282/login'; // Update with your actual backend URL

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ email, password });
    return this.http.post(this.loginUrl, body, { headers, responseType: 'text' })
      .pipe(
        catchError(error => {
          if (error.status === 401) {
            return throwError(error.error); // Return error message from the backend
          } else {
            return throwError('Something went wrong, please try again later.');
          }
        })
      );
  }
}
