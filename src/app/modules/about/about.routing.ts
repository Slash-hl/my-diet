import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './../../components/about/about.component';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent
    }
];

const aboutRoutes: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [aboutRoutes]
})
export class AboutRouting {}
