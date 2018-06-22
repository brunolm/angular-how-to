import { Injectable } from '@angular/core';
import { action, observable } from 'mobx-angular';

@Injectable({
  providedIn: 'root',
})
export class AboutStoreService {
  @observable title = 'about:hello world';

  @action
  randomTitle() {
    // tslint:disable-next-line:no-magic-numbers
    this.title = Math.random().toString(32);
  }
}