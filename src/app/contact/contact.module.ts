import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactRouting } from './contact.routing';

@NgModule({
    imports: [CommonModule, ContactRouting],
    declarations: [ContactComponent]
})
export class ContactModule {}
