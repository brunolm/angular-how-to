import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { InputComponent } from './input/input.component';
import { TutorialsComponent } from './tutorials.component';
import { TutorialsRoutingModule } from './tutorials.router';

@NgModule({
  imports: [CommonModule, TutorialsRoutingModule, SharedModule],
  declarations: [TutorialsComponent, InputComponent],
})
export class TutorialsModule {}
