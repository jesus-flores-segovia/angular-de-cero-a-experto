import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService,
               private router: Router ) {

                }

  ngOnInit(): void {

  }

  buscarHeroe( heroe: string ){

    this.router.navigate( ['/heroes', heroe] );
  }

}
