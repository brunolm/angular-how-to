import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent, TitleComponent],
  declarations: [LayoutComponent, TitleComponent],
})
export class SharedModule {}
