import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Order } from './order';

@Injectable()
export class ApiService {
  ordersUrl = 'api/orders';
  customerUrl = 'api/customers';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }

  searchOrders(customerName: string | null | undefined): Observable<Order[]> {
    const term = customerName ? customerName.trim() : null;

    const options = term ? { params: new HttpParams().set('customer', term) } : {};

    console.log(options);

    return this.http.get<Order[]>(this.ordersUrl, options);
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

}
