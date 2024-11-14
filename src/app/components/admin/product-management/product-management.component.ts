// components/admin/product-management.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';


@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  products: any[] = [];
  productForm: FormGroup;
  isEditing = false;
  currentProductId: string | null = null;

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      reorderLevel: ['', [Validators.required, Validators.min(0)]],
      image: ['']
    });
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.adminService.getAllProducts().subscribe(
      products => this.products = products
    );
  }

  onSubmit() {
    if (this.productForm.valid) {
      if (this.isEditing) {
        this.adminService.updateProduct(this.currentProductId!, this.productForm.value)
          .subscribe(() => {
            this.resetForm();
            this.loadProducts();
          });
      } else {
        this.adminService.createProduct(this.productForm.value)
          .subscribe(() => {
            this.resetForm();
            this.loadProducts();
          });
      }
    }
  }

  editProduct(product: any) {
    this.isEditing = true;
    this.currentProductId = product.id;
    this.productForm.patchValue(product);
  }

  deleteProduct(productId: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.adminService.deleteProduct(productId).subscribe(() => {
        this.loadProducts();
      });
    }
  }

  resetForm() {
    this.isEditing = false;
    this.currentProductId = null;
    this.productForm.reset();
  }
  onImageSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      
      reader.onload = () => {
        this.productForm.patchValue({
          image: reader.result // Set the image as a base64 string for preview or upload
        });
      };
  
      reader.readAsDataURL(file);
    }
  }
  
}