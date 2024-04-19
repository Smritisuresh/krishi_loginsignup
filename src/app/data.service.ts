import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000'; // JSON Server API URL

  constructor(private http: HttpClient) {}

  // Method to save user details from signup form
  saveUserDetails(userDetails: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, userDetails);
  }

  // Additional methods for getting cards or card details can be added here
}
