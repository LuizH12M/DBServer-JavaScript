import { Injectable } from '@angular/core';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes():Hero[]{
    return [{id:1,name:'Super TS'},{id:2,name:'Angular Kid'}];
  }
}
