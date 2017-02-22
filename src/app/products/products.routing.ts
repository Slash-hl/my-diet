import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsSectionComponent } from './products-section.component';
import { ProductListComponent } from './productList.component';
import { ProductDetailComponent } from './productDetail.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsSectionComponent,
        children: [
            {
                path: '',
                component: ProductListComponent
            },
            {
                path: ':productId',
                component: ProductDetailComponent
            }
        ]
    }
];

const productsRoutes: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [productsRoutes],
    declarations: [ProductsSectionComponent],
    exports: [RouterModule]
})
export class ProductsRouting {}
