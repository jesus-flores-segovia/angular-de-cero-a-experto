import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private httpClient: HttpClient ) { }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer aaBQBT48fKyMlENYU9qfXNEp6R64gC5U0SPYdMU9KzDL0RtR8OfELiFy39IaFMcnXhal1dtag-APn0XYPW-9e8LT6y0GLWmzOXZLzG69n_F5LxWU8s-KnPg6GoaVagGADoOLKLiYdUhpdSWPYg0NcHfRc9efD8tDSZMQ4'
    });

    return this.httpClient.get(url, { headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe( map( data =>  data['albums'].items));
  }

  getArtists( termino: string ){
    return this.getQuery(`search?q=${termino}&type=artist`).pipe( map( data =>  data['artists'].items));
  }

  getArtist( id: string ){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string ){
    return this.getQuery(`artists/${id}/top-tracks?country=ES`).pipe( map( data =>  data['tracks']));
  }

}
