import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsComponent } from './tutorials.component';
import { TutorialsRoutingModule } from './tutorials.router';

@NgModule({
  imports: [
    CommonModule,
    TutorialsRoutingModule,
  ],
  declarations: [TutorialsComponent]
})
export class TutorialsModule { }
