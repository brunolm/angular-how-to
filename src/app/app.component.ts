import { NgReduxRouter, routerReducer } from '@angular-redux/router';
import { DevToolsExtension, NgRedux } from '@angular-redux/store';
import { Component } from '@angular/core';
import { configure } from 'mobx';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { AboutReducer } from './about/services/about.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  constructor(
    private ngRedux: NgRedux<any>,
    private ngReduxRouter: NgReduxRouter,
    private devTools: DevToolsExtension,
  ) {
    const rootReducer = combineReducers({
      about: this.createReducer(AboutReducer),
      router: routerReducer,
    });
    this.ngRedux.configureStore(
      rootReducer,
      {},
      [thunk],
      this.devTools.isEnabled() ? [this.devTools.enhancer()] : undefined,
    );
    this.ngReduxRouter.initialize();
    configure({ enforceActions: 'strict' });
  }

  createReducer(ReducerService) {
    const reducer = new ReducerService();
    const defaultCallback = (s = {}) => s;

    return (state = {}, action) => {
      return (reducer[action.type] || defaultCallback)(state, action);
    };
  }
}
