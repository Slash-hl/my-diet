import { Component, OnInit } from '@angular/core';

import { Product } from './../../shared/models/product';
import { ProductService } from './../../shared/services/product.service';

@Component({
    selector: 'product-list',
    styles: [`
        .product-list {
          background: grey;
        }
    `],
    template: `
        <div *ngIf="products" class="product-list">
          <div *ngFor="let product of products">
            <div [routerLink]="['/products', product.id]">
              <img [src]="product.img">
    
              <h2>{{ product.name }}</h2>
              <div> {{ product.description }}</div>
              <p><a href="#">{{ product.id }}</a></p>
            </div>
          </div>
        </div>
    `
})
export class ProductListComponent implements OnInit{
    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts().then((products) => this.products = products);
    }
}
