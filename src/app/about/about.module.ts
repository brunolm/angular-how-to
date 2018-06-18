import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about.component';
import { RoutingModule } from './about.router';
import { AboutActions } from './services/about.actions';

@NgModule({
  imports: [RoutingModule, CommonModule, SharedModule, FormsModule],
  declarations: [AboutComponent],
  providers: [AboutActions],
})
export class AboutModule {}
