import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { OrderManagementComponent } from './components/admin/order-management/order-management.component';
import { ProductManagementComponent } from './components/admin/product-management/product-management.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ShopComponent } from './components/shop/shop.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
// Public routes
{ path: '', component: HomeComponent },
{ path: 'services', component: ServicesComponent },
{ path: 'shop', component: ShopComponent },
{ path: 'contact', component: ContactComponent },

// Auth routes
{ 
  path: 'auth',
  children: [
    { path: 'login', component: LoginComponent },
    //{ path: 'register', component: RegisterComponent }
  ]
},

// Protected routes
{ 
  path: 'appointments',
  component: AppointmentsComponent,
  canActivate: [AuthGuard]
},
{ 
  path: 'cart',
  component: CartComponent,
  canActivate: [AuthGuard]
},

// Admin routes
{
  path: 'admin',
  canActivate: [AdminGuard],
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: AdminDashboardComponent },
    { path: 'products', component: ProductManagementComponent },
    { path: 'orders', component: OrderManagementComponent }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
