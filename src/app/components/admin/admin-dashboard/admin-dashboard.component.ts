// components/admin/admin-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  statistics = {
    totalOrders: 0,
    pendingOrders: 0,
    totalProducts: 0,
    lowStock: 0,
    totalAppointments: 0,
    todayAppointments: 0,
    totalRevenue: 0,
    monthlyRevenue: 0
  };

  recentOrders: any[] = [];
  recentAppointments: any[] = [];
  lowStockProducts: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.adminService.getDashboardStatistics().subscribe(
      stats => this.statistics = stats
    );

    this.adminService.getRecentOrders().subscribe(
      orders => this.recentOrders = orders
    );

    this.adminService.getRecentAppointments().subscribe(
      appointments => this.recentAppointments = appointments
    );

    this.adminService.getLowStockProducts().subscribe(
      products => this.lowStockProducts = products
    );
  }
}