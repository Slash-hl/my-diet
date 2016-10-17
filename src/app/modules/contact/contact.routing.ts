import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { ContactSectionComponent } from './contact-section.component';

const routes: Routes = [
    {
        path: '',
        component: ContactSectionComponent,
        children: [
            {
                path: '',
                component: ContactComponent
            }
        ]
    }
];

const contactRoutes: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [contactRoutes],
    declarations: [ContactSectionComponent]
})
export class ContactRouting {
}
