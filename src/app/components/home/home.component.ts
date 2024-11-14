import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mainServices = [
    { name: 'Medical Appointments', icon: 'calendar-check' },
    { name: 'Vaccinations', icon: 'syringe' },
    { name: 'Surgery', icon: 'hospital' },
    { name: 'Pet Hotel', icon: 'home' },
    { name: 'Laboratory', icon: 'flask' },
    { name: 'Dental Care', icon: 'tooth' }
  ];
}