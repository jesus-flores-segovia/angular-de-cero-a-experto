import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {

  artista: any     = {};
  topTracks: any[] = [];
  loading          = true;

  constructor( private router: ActivatedRoute, private spotify: SpotifyService ) {

    this.router.params.subscribe( params => {

      setTimeout (() => {
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);
        this.loading  = false;
     }, 1000);
    });
   }

   getArtista( id: string ){

    this.spotify.getArtist( id ).subscribe( (data: any) => {

      this.artista = data;

    });
   }

   getTopTracks( id: string ){

    this.spotify.getTopTracks( id ).subscribe( (data: any) => {

      this.topTracks = data;

    });
   }

}
