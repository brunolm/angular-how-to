import { Injectable } from '@angular/core';
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

  @action
  setTitle(title: string) {
    this.title = title;
  }

  async randomTitle() {
    const response = await this.nasaService.getApod();

    this.setTitle(response.title);
  }
}
