import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { OrderManagementComponent } from './components/admin/order-management/order-management.component';
import { ProductManagementComponent } from './components/admin/product-management/product-management.component';
import { AppointmentDashboardComponent } from './components/appointment-dashboard/appointment-dashboard.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ServicesComponent } from './components/services/services.component';
import { ShopComponent } from './components/shop/shop.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ShopComponent,
    AppointmentsComponent,
    ContactComponent,
    CartComponent,
    AdminDashboardComponent,
    ProductManagementComponent,
    OrderManagementComponent,
    AppointmentDashboardComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    RouterOutlet,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterLink,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
