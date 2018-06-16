export class Hero {
  id: number;
  name: string;

  constructor(hero: Partial<Hero>) {
    Object.assign(this, hero);
  }
}
