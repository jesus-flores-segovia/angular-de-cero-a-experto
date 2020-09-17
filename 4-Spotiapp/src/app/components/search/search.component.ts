import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {

  constructor( private spotify: SpotifyService ) { }

  artists: any[]   = [];
  loading          = false;
  serviceError     = false;
  messageError     = '';

  buscar( termino:string ){

    this.loading  = true;

    setTimeout (() => {
      this.spotify.getArtists( termino ).subscribe( (data: any) => {

        this.artists = data;

      }, (error: any ) => {

        this.loading = false;
        this.serviceError = true;
        this.messageError = error.error.error.message;
      });

      this.loading  = false;

   }, 1000);
  }

}
