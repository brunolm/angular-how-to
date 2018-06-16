import { RouterModule, Routes } from '@angular/router';

import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
  },

  {
    path: 'new',
    component: HeroEditComponent,
  },

  {
    path: ':id',
    component: HeroDetailsComponent,
  },
];

export const RoutingModule = RouterModule.forChild(routes);
