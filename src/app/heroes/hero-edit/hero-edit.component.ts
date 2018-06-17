import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss'],
})
export class HeroEditComponent implements OnInit {
  heroForm: FormGroup;

  name: FormControl;
  mainCharacter: FormControl;
  secret: FormControl;
  history: FormControl;

  constructor(private formBuilder: FormBuilder) {
    const nameMinLen = 3;
    const textMinLen = 10;
    this.name = this.formBuilder.control('', [Validators.required, Validators.minLength(nameMinLen)]);
    this.mainCharacter = this.formBuilder.control('');
    this.secret = this.formBuilder.control('', Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/));
    this.history = this.formBuilder.control('', Validators.minLength(textMinLen));

    this.heroForm = this.formBuilder.group({
      name: this.name,
      mainCharacter: this.mainCharacter,
      secret: this.secret,
      history: this.history,
    });
  }

  ngOnInit() {
    //
  }

  get formErrors(): any {
    if (!this.heroForm) {
      return {};
    }

    return Object.keys(this.heroForm.controls).reduce((formErrors, field) => {
      const { errors } = this.heroForm.get(field);

      if (errors) {
        formErrors[field] = { ...(formErrors[field] || []), ...errors };
      }

      return formErrors;
    }, {});
  }

  submit() {
    if (this.heroForm.invalid) {
      alert('invalid form');

      return;
    }

    console.log(this.heroForm.value);
    alert('ok form');
  }
}
