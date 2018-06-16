import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
  },
];

export const RoutingModule = RouterModule.forChild(routes);
