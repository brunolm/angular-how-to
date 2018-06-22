import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AppStoreService } from '../../app-store.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  contactForm = this.formBuilder.group({
    email: this.formBuilder.control('', [Validators.required, Validators.email]),
    message: this.formBuilder.control('', Validators.required),
  });

  constructor(private formBuilder: FormBuilder, public store: AppStoreService) {}

  submit() {
    if (this.contactForm.invalid) {
      alert('the form is wrong');

      return;
    }

    alert('hey, thanks!');
  }
}
