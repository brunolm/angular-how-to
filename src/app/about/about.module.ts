import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';
import { RoutingModule } from './about.router';
import { AboutActions } from './services/about.actions';

@NgModule({
  imports: [RoutingModule, CommonModule],
  declarations: [AboutComponent],
  providers: [AboutActions],
})
export class AboutModule {}
