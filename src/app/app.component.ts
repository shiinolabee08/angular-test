import { Component, OnInit } from '@angular/core';

import { ApiService } from './data/api.service';
import { Customer } from './data/customer';
import { Order } from './data/order';

@Component({
  selector: 'customer-orders',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  orders: Order[] | undefined;
  customers: Customer[] | undefined;
  selectedCustomer: string | null | undefined;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchOrders();
    this.fetchCustomers();
    this.selectedCustomer = null;
  }

  public searchOrders(event: any) {
    this.apiService.searchOrders(this.selectedCustomer).subscribe(orders => this.orders = orders);
  }

  private fetchOrders() {
    this.apiService.getOrders().subscribe(orders => this.orders = orders);
  }

  private fetchCustomers() {
    this.apiService.getCustomers().subscribe(customers => this.customers = customers);
  }
}
