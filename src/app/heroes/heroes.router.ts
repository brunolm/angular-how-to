import { RouterModule, Routes } from '@angular/router';

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
];

export const RoutingModule = RouterModule.forChild(routes);
