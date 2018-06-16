import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesComponent } from './heroes.component';
import { RoutingModule } from './heroes.router';

@NgModule({
  imports: [RoutingModule, CommonModule],
  declarations: [HeroesComponent],
})
export class HeroesModule {}
