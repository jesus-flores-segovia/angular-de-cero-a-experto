import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styles: [
  ]
})
export class TargetsComponent {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }

  verArtista( item: any ){

    let artistaId = '';

    if (item.type === 'album'){

      artistaId = item.artists[0].id;

    } else{

      artistaId = item.id;
    }

    this.router.navigate( [ '/artist', artistaId ] );
  }

}
