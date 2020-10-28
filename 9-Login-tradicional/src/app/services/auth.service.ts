import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private API_KEY = 'AIzaSyC1RU9ZC5_nwnmAeYSJ5fvB6Wywn_We8GQ';
  private token: string;

  constructor( private httpClient: HttpClient ) { 

    this.readToken();
    console.log(this.token);
  }

  login( user: Usuario ) {

    const body = {
      ...user,
      returnSecureToken: true
    };

    return this.httpClient.post( `${this.URL}:signInWithPassword?key=${this.API_KEY}`, body).pipe(
      map( (response => {
        console.log(response);
        this.saveToken(response['idToken']);
      }))
    );
  }

  signUp( user: Usuario ) {

    const body = {
      ...user,
      returnSecureToken: true
    };

    return this.httpClient.post( `${this.URL}:signUp?key=${this.API_KEY}`, body).pipe(
      map( (response => {
        console.log(response);
        this.saveToken(response['idToken']);
      }))
    );
  }

  logout( ) {

  }

  saveToken( token: string ) {

    this.token = token;
    localStorage.setItem('token', token);
  }

  readToken() {

    if ( localStorage.getItem('token') ) {

      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }
}
