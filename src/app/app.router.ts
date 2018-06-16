import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },

  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'about', loadChildren: 'app/about/about.module#AboutModule' }],
  },

  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' }],
  },

  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' }],
  },

  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'tutorials', loadChildren: 'app/tutorials/tutorials.module#TutorialsModule' }],
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
