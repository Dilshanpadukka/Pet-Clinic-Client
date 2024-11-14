// components/admin/appointment-dashboard/appointment-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-dashboard',
  templateUrl: './appointment-dashboard.component.html',
  styleUrls: ['./appointment-dashboard.component.scss']
})
export class AppointmentDashboardComponent implements OnInit {
  appointments: any[] = [];
  filteredAppointments: any[] = [];
  filterDate: string = '';
  filterStatus: string = 'all';

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService.getAppointments().subscribe(
      data => {
        this.appointments = data;
        this.applyFilters();
      }
    );
  }

  applyFilters() {
    this.filteredAppointments = this.appointments.filter(app => {
      const dateMatch = !this.filterDate || app.date === this.filterDate;
      const statusMatch = this.filterStatus === 'all' || app.status === this.filterStatus;
      return dateMatch && statusMatch;
    });
  }

  updateStatus(appointmentId: string, status: string) {
    this.appointmentService.updateAppointmentStatus(appointmentId, status)
      .subscribe(() => {
        this.loadAppointments();
      });
  }
}