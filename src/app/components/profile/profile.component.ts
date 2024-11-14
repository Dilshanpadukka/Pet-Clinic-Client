// components/profile/profile.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { AuthService, User } from '../../shared/models/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: User | null = null;
  isEditing = false;
  pets: any[] = [];
  orders: any[] = [];
  appointments: any[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadUserData();
    this.loadPets();
    this.loadOrders();
    this.loadAppointments();
  }

  loadUserData() {
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.user = user;
        this.profileForm.patchValue({
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address
        });
      }
    });
  }

  loadPets() {
    this.userService.getUserPets().subscribe(
      pets => this.pets = pets
    );
  }

  loadOrders() {
    this.userService.getUserOrders().subscribe(
      orders => this.orders = orders
    );
  }

  loadAppointments() {
    this.userService.getUserAppointments().subscribe(
      appointments => this.appointments = appointments
    );
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.userService.updateProfile(this.profileForm.value).subscribe(
        updatedUser => {
          this.user = updatedUser;
          this.isEditing = false;
        }
      );
    }
  }
}