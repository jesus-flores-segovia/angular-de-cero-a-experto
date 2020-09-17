import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styles: [
  ]
})
export class HeroesSearchComponent implements OnInit {

  heroes: Heroe[] = [];
  searchQuery: string = "";

  constructor( private heroesService: HeroesService,
               private router: Router,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {

      this.heroes = this.heroesService.buscarHeroes(params['searchQuery']);
      this.searchQuery = params['searchQuery'];
    });

  }

  verHeroe( idx: number){

    this.router.navigate( ['/heroe', idx] );
  }

}
