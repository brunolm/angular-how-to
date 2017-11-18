import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsComponent } from './tutorials.component';

const routes: Routes = [
  { path: '', component: TutorialsComponent },
];

export const TutorialsRoutingModule = RouterModule.forChild(routes);
