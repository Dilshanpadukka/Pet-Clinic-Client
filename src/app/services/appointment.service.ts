// services/appointment.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments = new BehaviorSubject<any[]>([]);

  bookAppointment(appointment: any) {
    const current = this.appointments.value;
    this.appointments.next([...current, appointment]);
  }

  getAppointments() {
    return this.appointments.asObservable();
  }
  updateAppointmentStatus(appointmentId: string, status: string): Observable<void> {
    const updatedAppointments = this.appointments.value.map(app => 
      app.id === appointmentId ? { ...app, status } : app
    );
    this.appointments.next(updatedAppointments);
    return new Observable(observer => {
      observer.next();
      observer.complete();
    });
  }
}