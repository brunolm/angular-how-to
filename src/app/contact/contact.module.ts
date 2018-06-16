import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { RoutingModule } from './contact.router';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [RoutingModule, CommonModule, ReactiveFormsModule],
  declarations: [ContactComponent, FormComponent],
})
export class ContactModule {}
