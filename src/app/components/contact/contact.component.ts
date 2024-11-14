import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  contactInfo = {
    address: 'No. 1000, Colombo Road, Colombo 04, Sri Lanka',
    phone: '+94 112 111 1111',
    emergency: '+94 77 555 5555',
    email: 'info@petmedcare.lk',
    hours: 'Monday to Sunday: 9:00 a.m. – 5:00 p.m.'
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Add API call here
    }
  }
}