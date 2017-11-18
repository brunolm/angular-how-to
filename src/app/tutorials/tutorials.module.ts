import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsComponent } from './tutorials.component';
import { Angular5Component } from './angular5/angular5.component';
import { TutorialsRoutingModule } from './tutorials.router';

@NgModule({
  imports: [
    CommonModule,
    TutorialsRoutingModule,
  ],
  declarations: [TutorialsComponent, Angular5Component]
})
export class TutorialsModule { }
