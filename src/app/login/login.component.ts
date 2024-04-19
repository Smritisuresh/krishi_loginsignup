import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient) {}

  login(adharNumber: string, password: string): void {
    this.http.get<any>(`http://localhost:3000/users?adharNumber=${adharNumber}&password=${password}`)
      .subscribe(response => {
        if (response.length > 0) {
          console.log('Login successful');
          // You can add redirect or any other logic here after successful login
        } else {
          console.error('Invalid credentials');
          // Handle invalid credentials here
        }
      }, error => {
        console.error('Error occurred while logging in:', error);
      });
  }
}
