import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsComponent } from './tutorials.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialsComponent,
    children: [
      { path: 'input', component: InputComponent },
    ],
  },
];

export const TutorialsRoutingModule = RouterModule.forChild(routes);
