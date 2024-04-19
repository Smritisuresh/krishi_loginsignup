import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  login(adharNumber: string, password: string): void {
    this.http.get<any>('./assets/db.json')
      .subscribe(response => {
        const users = response.users;
        const user = users.find((user: any) => user.adharNumber === adharNumber);
        if (user) {
          if (user.password === password) {
            // Redirect to home page if login successful
            this.router.navigate(['/signup']);
          } else {
            alert('Incorrect password. Please try again.');
          }
        } else {
          // Redirect to sign up page if user does not exist
          this.router.navigate(['/signup']);
          alert('User does not exist. Please sign up.');
        }
      }, error => {
        console.error('Error occurred while logging in:', error);
        alert('An error occurred while logging in. Please try again later.');
      });
  }
}
