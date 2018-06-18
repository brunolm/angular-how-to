import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { MarkdownPipe } from './markdown.pipe';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [LayoutComponent, TitleComponent, MarkdownPipe],
  declarations: [LayoutComponent, TitleComponent, MarkdownPipe],
})
export class SharedModule {}
