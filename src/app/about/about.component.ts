import { Component } from '@angular/core';
import { NgxReduxStatePropsService } from 'ngx-redux-state-props';

import { AppState } from '../app-state.model';
import { AboutActions } from './services/about.actions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  md = `# Write some markdown
- here and
- here
- then
  - here
    - or here`;

  constructor(private actions: AboutActions, private redux: NgxReduxStatePropsService<AppState>) {}

  get state() {
    return this.redux.appState && this.redux.appState.about;
  }

  testRedux() {
    this.actions.getApiValue();
  }

  getNasaApod() {
    this.actions.getNasaApod();
  }
}
