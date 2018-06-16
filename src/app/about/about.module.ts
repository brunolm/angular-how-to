import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';
import { RoutingModule } from './about.router';

@NgModule({
  imports: [RoutingModule, CommonModule],
  declarations: [AboutComponent],
})
export class AboutModule {}
