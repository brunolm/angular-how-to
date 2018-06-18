import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [LayoutComponent, TitleComponent],
  declarations: [LayoutComponent, TitleComponent],
})
export class SharedModule {}
