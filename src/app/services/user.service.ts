// services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../shared/models/user.interface';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  updateProfile(userData: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/profile`, userData);
  }

  getUserPets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/pets`);
  }

  addPet(petData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/pets`, petData);
  }

  updatePet(petId: string, petData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/pets/${petId}`, petData);
  }

  getUserOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/orders`);
  }

  getUserAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/appointments`);
  }
}