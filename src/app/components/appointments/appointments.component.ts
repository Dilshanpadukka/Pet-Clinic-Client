import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AppointmentService } from '../../services/appointment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {
  appointmentForm: FormGroup;
  consultationTypes = [
    { id: 'general', name: 'General Consultation', price: 1300 },
    { id: 'dental', name: 'Dental Consultation', price: 1500 },
    { id: 'cardiac', name: 'Cardiac Consultation', price: 1500 },
    { id: 'video', name: 'Video Consultation', price: 1300 }
  ];

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService
  ) {
    this.appointmentForm = this.fb.group({
      petName: ['', Validators.required],
      petType: ['', Validators.required],
      ownerName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      consultationType: ['', Validators.required],
      preferredDate: ['', Validators.required],
      preferredTime: ['', Validators.required],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      this.appointmentService.bookAppointment(this.appointmentForm.value);
      // Add success message or redirect
    }
  }
}