import { RouterModule, Routes } from '@angular/router';

import { InputComponent } from './input/input.component';
import { TutorialsComponent } from './tutorials.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialsComponent,
    children: [{ path: 'input', component: InputComponent }],
  },
];

export const TutorialsRoutingModule = RouterModule.forChild(routes);
