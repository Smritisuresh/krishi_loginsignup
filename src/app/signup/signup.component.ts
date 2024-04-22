import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      state: [''],
      pincode: [''],
      adharNumber: ['', Validators.pattern(/^\d{12}$/)], // 12-digit Aadhar number pattern
      phone: ['', Validators.pattern(/^\d{10}$/)], // 10-digit phone number pattern
      password: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.formGroup.valid) {
      // Send the form data to the server
      this.http.post('http://localhost:3000/users', this.formGroup.value).subscribe(
        () => {
          alert('Form submitted successfully');
          console.log('Form submitted successfully');
          console.log('Form data:', this.formGroup.value);
        },
        error => {
          console.error('Error submitting form:', error);
          alert('An error occurred while submitting the form. Please try again later.');
        }
      );
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

  calculateProgress(): number {
    const total = Object.keys(this.formGroup.controls).length;
    const filled = Object.values(this.formGroup.controls).filter(control => control.valid).length;
    return (filled / total) * 100;
  }
  
}
