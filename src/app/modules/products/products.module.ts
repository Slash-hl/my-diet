import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRouting } from './products.routing';
import { ProductListComponent } from './../../components/product/productList.component';
import { ProductDetailComponent } from './../../components/product/productDetail.component';
import { ProductService } from './../../shared/services/product.service'

@NgModule({
    imports: [
        CommonModule,
        ProductsRouting
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule {}
