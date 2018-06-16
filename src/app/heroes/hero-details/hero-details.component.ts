import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../shared/hero.model';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  heroes = [
    new Hero({ id: 1, name: 'Saitama' }),
    new Hero({ id: 2, name: 'Goku' }),
    new Hero({ id: 3, name: 'All Might' }),
  ];

  activeHero: Hero;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.pipe(map((params) => +params.get('id'))).subscribe((id) => {
      this.activeHero = this.heroes.find((hero) => hero.id === id);
    });
  }

  byId(_, hero: Hero) {
    return hero.id;
  }
}
