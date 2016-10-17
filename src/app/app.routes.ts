import { Routes } from '@angular/router';

import { Home } from './pages/home';

export const ROUTES: Routes = [
    {path: '', component: Home},
    {path: 'about', loadChildren: () => new Promise(resolve => {
        (require as any).ensure([], (require: any) => resolve(require('./modules/about/about.module').AboutModule))
    })},
    {path: 'products', loadChildren: () => new Promise(resolve => {
        (require as any).ensure([], (require: any) => resolve(require('./modules/products/products.module').ProductModule))
    })},
    {path: 'contact', loadChildren: () => new Promise(resolve => {
        (require as any).ensure([], (require: any) => resolve(require('./modules/contact/contact.module').ContactModule))
    })}
];
