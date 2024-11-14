import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.products = this.shopService.getProducts();
    this.categories = [...new Set(this.products.map(p => p.category))];
  }

  filterProducts(category: string) {
    this.selectedCategory = category;
  }

  addToCart(product: Product) {
    this.shopService.addToCart(product);
    
  }
}