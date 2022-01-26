import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customers } from './customer';
import { Products } from './product';

export class InMemoryOrderService implements InMemoryDbService {
  createDb() {
    const [firstCustomer, secondCustomer] = Customers;
    const [firstProduct, secondProduct] = Products;

    let orders = [
      {
        id: '0001',
        dateOrdered: new Date(),
        customer: firstCustomer,
        product: firstProduct,
        quantity: 2,
      },
      {
        id: '0002',
        dateOrdered: new Date(),
        customer: secondCustomer,
        product: firstProduct,
        quantity: 1,
      },
      {
        id: '0002',
        dateOrdered: new Date(),
        customer: firstCustomer,
        product: secondProduct,
        quantity: 2,
      },
    ];
    let customers = [...Customers];
    let products = [...Products];
    return {orders, customers, products};
  }
}