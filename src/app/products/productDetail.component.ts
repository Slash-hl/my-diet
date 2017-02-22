import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../shared/models/product';
import { ProductService } from './../shared/services/product.service';


@Component({
    template: `
        I am a product {{product?.id}}
    `
})
export class ProductDetailComponent implements OnInit{
    product: Product;

    constructor(private route: ActivatedRoute, private productService: ProductService) {}

    ngOnInit() {
        const productId = this.route.snapshot.params['productId'];
        this.productService.getProduct(productId).then((product) => this.product = product);
    }
}
