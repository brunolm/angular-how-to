import { Component } from '@angular/core';
import { NgxReduxStatePropsService } from 'ngx-redux-state-props';

import { AboutActions } from './services/about.actions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private actions: AboutActions, private redux: NgxReduxStatePropsService) {}

  get state() {
    return this.redux.appState;
  }

  testRedux() {
    this.actions.getApiValue();
  }

  getNasaApod() {
    this.actions.getNasaApod();
  }
}
