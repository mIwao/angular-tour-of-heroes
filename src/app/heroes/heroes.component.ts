import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'

<<<<<<< HEAD
import { HEROES } from '../mock-heroes'

=======
>>>>>>> c295c6fb720194956c94036eb0f6c39923ef376a
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

<<<<<<< HEAD
  heroes = HEROES

  selectedHero: Hero

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
=======
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  
>>>>>>> c295c6fb720194956c94036eb0f6c39923ef376a
  constructor() { }

  ngOnInit() {
  }

}
