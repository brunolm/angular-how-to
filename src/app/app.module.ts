import { NgReduxRouterModule } from '@angular-redux/router';
import { NgReduxModule } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxReduxStatePropsModule } from 'ngx-redux-state-props';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    NgxReduxStatePropsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
