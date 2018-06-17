import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TakeUntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';
import { map } from 'rxjs/operators';

import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
@TakeUntilDestroy()
export class HeroDetailsComponent implements OnInit, OnDestroy {
  heroes = [
    new Hero({ id: 1, name: 'Saitama' }),
    new Hero({ id: 2, name: 'Goku' }),
    new Hero({ id: 3, name: 'All Might' }),
  ];

  activeHero: Hero;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(map((params) => +params.get('id')))
      .pipe(untilDestroyed(this))
      .subscribe((id) => {
        this.activeHero = this.heroes.find((hero) => hero.id === id);
      });
  }

  ngOnDestroy() {
    //
  }

  byId(_, hero: Hero) {
    return hero.id;
  }
}
