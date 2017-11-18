import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'tutorials', loadChildren: 'app/tutorials/tutorials.module#TutorialsModule' },
    ],
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
