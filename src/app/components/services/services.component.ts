import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      title: 'Medical Consultations',
      price: 'LKR 1300',
      description: 'General health check-ups and consultations'
    },
    {
      title: 'Dental Care',
      price: 'LKR 1500',
      description: 'Complete dental examination and cleaning'
    },
    {
      title: 'Surgery',
      price: 'From LKR 5000',
      description: 'Various surgical procedures'
    },
    {
      title: 'Laboratory Services',
      price: 'Varies',
      description: 'Comprehensive diagnostic testing'
    }
  ];
}