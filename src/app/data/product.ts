export interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  inStock: boolean;
}

export const Products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Test',
    quantity: 100,
    inStock: true,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Test',
    quantity: 10,
    inStock: true,
  },
] as Product[];
