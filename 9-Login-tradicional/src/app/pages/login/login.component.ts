import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public keepUser = false;

  constructor( private auth: AuthService, private router: Router) {

    this.usuario = new Usuario();
  }

  ngOnInit() {

    if ( localStorage.getItem('keepUser') === 'true' ) {

      this.keepUser = true;
      this.usuario.email = localStorage.getItem('email');
    }
  }

  login( form: NgForm ) {

    if ( form.invalid ) {
      return;
    }

    Swal.fire({
      icon: 'info',
      title: 'Espere por favor...',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.auth.login(this.usuario).subscribe( (result) => {

      if ( this.keepUser ) {

        localStorage.setItem('email', this.usuario.email);
        localStorage.setItem('keepUser', 'true');
      } else {

        localStorage.removeItem('email');
        localStorage.removeItem('keepUser');
      }

      setTimeout( () => {
        Swal.close();
        this.router.navigateByUrl('/home');
      }, 1000 );

    }, (err) => {

      setTimeout( () => {
        Swal.fire({
          icon: 'error',
          title: 'Error de autenticación',
          text: err.error.error.message,
          allowOutsideClick: true
        });
      }, 1000 );

    } );

  }

}
