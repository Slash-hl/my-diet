import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', loadChildren: () => new Promise(resolve => {
        (require as any).ensure([], (require: any) => resolve(require('./about/about.module').AboutModule))
    })},
    {path: 'products', loadChildren: () => new Promise(resolve => {
        (require as any).ensure([], (require: any) => resolve(require('./products/products.module').ProductModule))
    })},
    {path: 'contact', loadChildren: () => new Promise(resolve => {
        (require as any).ensure([], (require: any) => resolve(require('./contact/contact.module').ContactModule))
    })}
];

const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});

@NgModule({
    imports: [appRoutes],
    declarations: [
        HomeComponent
    ],
    exports: [RouterModule]
})
export class AppRouting {}
