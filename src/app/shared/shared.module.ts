import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { TitleComponent } from './title/title.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LayoutComponent,
    TitleComponent,
  ],
  declarations: [
    LayoutComponent,
    TitleComponent,
  ],
})
export class SharedModule { }
