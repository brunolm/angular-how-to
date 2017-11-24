import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsComponent } from './tutorials.component';
import { TutorialsRoutingModule } from './tutorials.router';
import { InputComponent } from './input/input.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TutorialsRoutingModule,
    SharedModule,
  ],
  declarations: [TutorialsComponent, InputComponent],
})
export class TutorialsModule { }
