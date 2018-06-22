import { Injectable } from '@angular/core';
import { runInAction } from 'mobx';
import { action, observable } from 'mobx-angular';

import { NasaService } from '../shared/nasa.service';

@Injectable({
  providedIn: 'root',
})
export class AboutStoreService {
  @observable title: string;

  constructor(private nasaService: NasaService) {
    this.initialize();
  }

  @action
  private initialize() {
    this.title = 'about:hello world';
  }

  async randomTitle() {
    const response = await this.nasaService.getApod();

    runInAction(() => {
      this.title = response.title;
    });
  }
}
