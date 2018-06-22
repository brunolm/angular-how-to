import { Injectable } from '@angular/core';
import { configure } from 'mobx';

import { AboutStoreService } from './about/about-store.service';
import { ContactStoreService } from './contact/contact-store.service';
import { HeroesStoreService } from './heroes/heroes-store.service';
import { TutorialsStoreService } from './tutorials/tutorials-store.service';

@Injectable({
  providedIn: 'root',
})
export class AppStoreService {
  constructor(
    public about: AboutStoreService,
    public contact: ContactStoreService,
    public heroes: HeroesStoreService,
    public tutorials: TutorialsStoreService,
  ) {
    configure({ enforceActions: 'strict' });
  }
}
