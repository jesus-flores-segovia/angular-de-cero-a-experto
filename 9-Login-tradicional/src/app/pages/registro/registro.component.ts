import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario: Usuario;

  constructor( private auth: AuthService, private router: Router ) {

    this.usuario = new Usuario();
  }

  ngOnInit() {

   }

   onSubmit(form: NgForm) {

    if ( form.invalid ) {
      return;
    }

    Swal.fire({
      icon: 'info',
      title: 'Espere por favor...',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.auth.signUp(this.usuario).subscribe( (result) => {

      setTimeout( () => {
        Swal.close();
        this.router.navigateByUrl('/home');
      }, 1000 );
    }, (err) => {

      setTimeout( () => {
        Swal.fire({
          icon: 'error',
          title: 'Error de registro',
          text: err.error.error.message,
          allowOutsideClick: true
        });
      }, 1000 );
    } );

   }

}
