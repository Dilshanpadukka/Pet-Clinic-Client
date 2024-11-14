// components/admin/order-management.component.ts
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';


@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent implements OnInit {
  orders: any[] = [];
  filterStatus: string = 'all';
  searchTerm: string = '';

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.adminService.getAllOrders().subscribe(
      orders => this.orders = orders
    );
  }

  updateOrderStatus(orderId: string, status: string) {
    this.adminService.updateOrderStatus(orderId, status).subscribe(() => {
      this.loadOrders();
    });
  }

  filterOrders(status: string) {
    this.filterStatus = status;
  }

  get filteredOrders() {
    return this.orders.filter(order => {
      const matchesStatus = this.filterStatus === 'all' || order.status === this.filterStatus;
      const matchesSearch = this.searchTerm === '' || 
        order.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        order.customerName.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }
}