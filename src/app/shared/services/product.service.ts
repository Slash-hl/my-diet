import { Injectable } from '@angular/core';
import { Product } from './../models/product';

const productsPromise: Promise<Product[]> = Promise.resolve([
    {
        id: 1,
        name: 'product 1',
        description: 'description 1',
        img: ''
    },
    {
        id: 2,
        name: 'product 2',
        description: 'description 2',
        img: ''
    },
    {
        id: 3,
        name: 'product 3',
        description: 'description 3',
        img: ''
    }
]);

@Injectable()
export class ProductService {
    getProducts() {
        return productsPromise;
    }

    getProduct(productId: number) {
        return productsPromise.then((products) => products.find((product) => product.id == productId));
    }
}
