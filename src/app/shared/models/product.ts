// shared/models/product.interface.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    description?: string;
  }