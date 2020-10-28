import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="jumbotron mt-5">
        <h1 class="display-5">
            Componentes, directivas de atributos, ciclo de vida y más...
        </h1>
    </div>
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <h3>Parráfo para comparar</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus arcu imperdiet faucibus dictum. Nunc ultricies velit orci, ac tincidunt ante consequat et. In hac habitasse platea dictumst. Curabitur vitae eros dictum, tincidunt turpis at, varius
        mi. Etiam ornare ut augue ut blandit. Vivamus rhoncus neque in neque tincidunt feugiat. Suspendisse tempus est eu ligula elementum, et consequat diam feugiat.
    </p>
    <app-clases></app-clases>
    <h1 class="mt-5">Directivas personalizadas</h1>
    <p class="mt-3" [appResaltado]="'orange'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus arcu imperdiet faucibus dictum. Nunc ultricies velit orci, ac tincidunt ante consequat et. In hac habitasse platea dictumst. Curabitur vitae eros dictum, tincidunt turpis at, varius
        mi. Etiam ornare ut augue ut blandit. Vivamus rhoncus neque in neque tincidunt feugiat. Suspendisse tempus est eu ligula elementum, et consequat diam feugiat.
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
