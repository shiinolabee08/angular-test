import { Customer } from './customer';
import { Product } from './product';

export interface Order {
  id: string;
  dateOrdered: Date;
  customer: Customer;
  product: Product;
  quantity: number;
}