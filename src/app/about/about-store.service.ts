import { Injectable } from '@angular/core';
import { action, observable } from 'mobx-angular';

@Injectable({
  providedIn: 'root',
})
export class AboutStoreService {
  @observable title: string;

  constructor() {
    this.initialize();
  }

  @action
  private initialize() {
    this.title = 'about:hello world';
  }

  @action
  randomTitle() {
    // tslint:disable-next-line:no-magic-numbers
    this.title = Math.random().toString(32);
  }
}
