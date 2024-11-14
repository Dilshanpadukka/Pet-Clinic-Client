// services/admin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDashboardStatistics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/statistics`);
  }

  getRecentOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/orders/recent`);
  }

  getRecentAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/appointments/today`);
  }

  getLowStockProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/products/low-stock`);
  }

  updateProductStock(productId: string, quantity: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/admin/products/${productId}/stock`, {
      quantity
    });
  }
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/products`);
  }
  
  createProduct(productData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/products`, productData);
  }
  
  updateProduct(productId: string, productData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/admin/products/${productId}`, productData);
  }
  
  deleteProduct(productId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/products/${productId}`);
  }
  // services/admin.service.ts
// Add these methods to the existing AdminService

getAllOrders(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/admin/orders`);
}

updateOrderStatus(orderId: string, status: string): Observable<any> {
  return this.http.put(`${this.apiUrl}/admin/orders/${orderId}/status`, { status });
}

getOrderDetails(orderId: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/admin/orders/${orderId}`);
}
}