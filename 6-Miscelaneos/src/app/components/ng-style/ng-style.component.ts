import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <h1 class="mt-5">ngStyle y su uso con directivas de atributos</h1>
    <div class="row">
      <div class="col m-1">
        <p [style.fontSize.px]="tamano">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus arcu imperdiet faucibus dictum. Nunc ultricies velit orci, ac tincidunt ante consequat et.
          In hac habitasse platea dictumst. Curabitur vitae eros dictum, tincidunt turpis at, varius mi.
          Etiam ornare ut augue ut blandit. Vivamus rhoncus neque in neque tincidunt feugiat. Suspendisse tempus est eu ligula elementum, et consequat diam feugiat.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary m-1" type="submit" (click)="tamano = tamano - 1"><i class="fa fa-minus"></i></button>
        <button class="btn btn-primary m-1" type="submit" (click)="tamano = tamano + 1"><i class="fa fa-plus"></i></button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
