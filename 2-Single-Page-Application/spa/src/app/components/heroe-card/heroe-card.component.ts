import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [
  ]
})

export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() idx: any;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router ) { 
    
    this.heroeSeleccionado = new EventEmitter();

  }

  ngOnInit(): void {
  }

  verHeroe(){

    //this.router.navigate( ['/heroe', this.idx] );

    this.heroeSeleccionado.emit( this.idx );
  }

}
