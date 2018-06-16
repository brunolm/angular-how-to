import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroesComponent } from './heroes.component';
import { RoutingModule } from './heroes.router';

@NgModule({
  imports: [RoutingModule, CommonModule, ReactiveFormsModule],
  declarations: [HeroesComponent, HeroEditComponent],
})
export class HeroesModule {}
