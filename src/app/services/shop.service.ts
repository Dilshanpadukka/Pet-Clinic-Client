// services/shop.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../shared/models/product';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Royal Canin Fit32 (2kg)',
      price: 9450.00,
      category: 'Cat Food',
      image: 'https://i5.walmartimages.com/seo/PEDIGREE-Complete-Nutrition-Adult-Dry-Dog-Food-Roasted-Chicken-Rice-Vegetable-Flavor-Dog-Kibble-30-lb-Bag_82236770-44de-448c-abc6-d5b9c973da75.f3f97f56b0fb9524b59efa0fae1d7628.jpeg',
      description: 'Adult cat food for optimal health'
    }, {
      id: 1,
      name: 'Royal Canin Fit32 (2kg)',
      price: 9450.00,
      category: 'Dog Food',
      image: 'https://s7d2.scene7.com/is/image/PetSmart/5327624',
      description: 'Adult cat food for optimal health'
    }, {
      id: 1,
      name: 'Royal Canin Fit32 (2kg)',
      price: 9450.00,
      category: 'Cat Food',
      image: 'assets/products/fit32.jpg',
      description: 'Adult cat food for optimal health'
    }, {
      id: 1,
      name: 'Royal Canin Fit32 (2kg)',
      price: 9450.00,
      category: 'Cat Food',
      image: 'assets/products/fit32.jpg',
      description: 'Adult cat food for optimal health'
    }, {
      id: 1,
      name: 'Royal Canin Fit32 (2kg)',
      price: 9450.00,
      category: 'Cat Food',
      image: 'assets/products/fit32.jpg',
      description: 'Adult cat food for optimal health'
    }, {
      id: 1,
      name: 'Royal Canin Fit32 (2kg)',
      price: 9450.00,
      category: 'Cat Food',
      image: 'assets/products/fit32.jpg',
      description: 'Adult cat food for optimal health'
    }, {
      id: 1,
      name: 'Royal Canin Fit32 (2kg)',
      price: 9450.00,
      category: 'Cat Food',
      image: 'assets/products/fit32.jpg',
      description: 'Adult cat food for optimal health'
    }, {
      id: 1,
      name: 'Royal Canin Fit32 (2kg)',
      price: 9450.00,
      category: 'Cat Food',
      image: 'assets/products/fit32.jpg',
      description: 'Adult cat food for optimal health'
    }, {
      id: 1,
      name: 'Royal Canin Fit32 (2kg)',
      price: 9450.00,
      category: 'Cat Food',
      image: 'assets/products/fit32.jpg',
      description: 'Adult cat food for optimal health'
    },
    // Add more products...
  ];

  private cart = new BehaviorSubject<Product[]>([]);

  getProducts() {
    return this.products;
  }

  getCart() {
    return this.cart.asObservable();
  }

  addToCart(product: Product) {
    const currentCart = this.cart.value;
    this.cart.next([...currentCart, product]);
  }
}