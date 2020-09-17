import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    nombre    : string   = 'jesús flores segovia';
    arreglo   : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    PI        : number   = Math.PI;
    porcentaje: number   = 0.234;
    salario   : number   = 1154.234;
    fecha     : Date     = new Date();
    idioma    : string   = '';
    videoUrl  : string   = 'https://www.youtube.com/embed/WkVN-O1B9L8';
    activar   : boolean  = true;

    valorPromesa = new Promise( (resolve) => {

      setTimeout( () => {
        resolve('Llegó la data');
      }, 4500);

    });

    heroe = {
      nombre: 'Logan',
      clave: 'Wolverine',
      edad: 500,
      direccion: {
        calle: 'Primera',
        casa: 20
      }
    };

    cambiarIdioma(){

      var idiomaSeleccionado = (<HTMLInputElement>event.target).innerHTML;

      switch(idiomaSeleccionado) { 
        case 'Español': { 
          this.idioma = 'es';
           break; 
        } 
        case 'Francés': { 
          this.idioma = 'fr'; 
           break; 
        } 
        case 'Inglés': { 
          this.idioma = 'en'; 
           break; 
        } 
     } 
    }

    activarDesactivar(){

      if(this.activar){
        this.activar = false;
      }else{
        this.activar = true;
      }
    }

}
