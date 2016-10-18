import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './../../components/contact/contact.component';
import { ContactRouting } from './contact.routing';

@NgModule({
    imports: [CommonModule, ContactRouting],
    declarations: [ContactComponent]
})
export class ContactModule {}
