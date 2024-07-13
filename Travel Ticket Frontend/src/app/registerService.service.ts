import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './Register';

@Injectable({
    providedIn: 'root'
})

export class RegisterService {
    private baseUrl = 'http://localhost:8282';

    constructor(private http: HttpClient) {}

    register(student: Register): Observable<Register> {
        return this.http.post<Register>(`${this.baseUrl}/add-user`, student);
    }

    }
