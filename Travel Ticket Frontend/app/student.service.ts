import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8282/api/students';

  constructor(private http: HttpClient) {}

  register(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/register`, student);
  }

  login(credentials: { email: string, password: string }): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/login`, credentials);
  }

  getAllPendingStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/pending`);
  }

  approveStudent(id: number): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/approve/${id}`, {});
  }

  rejectStudent(id: number): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/reject/${id}`, {});
  }
}
