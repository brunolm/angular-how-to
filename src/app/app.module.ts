import { NgReduxRouterModule } from '@angular-redux/router';
import { NgReduxModule } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MobxAngularModule } from 'mobx-angular';
import { NgxReduxStatePropsModule } from 'ngx-redux-state-props';

import { AboutStoreService } from './about/about-store.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { ContactStoreService } from './contact/contact-store.service';
import { AppStoreService } from './core/app-store.service';
import { HeroesStoreService } from './heroes/heroes-store.service';
import { SharedModule } from './shared/shared.module';
import { TutorialsStoreService } from './tutorials/tutorials-store.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    MobxAngularModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    NgxReduxStatePropsModule,
  ],
  providers: [AppStoreService, AboutStoreService, ContactStoreService, HeroesStoreService, TutorialsStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
