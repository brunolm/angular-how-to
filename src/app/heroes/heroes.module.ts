import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroesComponent } from './heroes.component';
import { RoutingModule } from './heroes.router';

@NgModule({
  imports: [RoutingModule, CommonModule, ReactiveFormsModule],
  declarations: [HeroesComponent, HeroEditComponent, HeroDetailsComponent],
})
export class HeroesModule {}
