import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  newSongs: any[]   = [];
  loading           = true;
  serviceError      = false;
  messageError      = '';

  constructor( private spotify: SpotifyService ) {

      setTimeout (() => {

        this.spotify.getNewReleases().subscribe( (data: any) => {

          this.newSongs = data;

        }, (error: any ) => {

          this.loading = false;
          this.serviceError = true;
          this.messageError = error.error.error.message;
        });

        this.loading  = false;

     }, 1000);
  }

}
