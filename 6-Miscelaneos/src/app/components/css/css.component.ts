import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <h1 class="mt-5">Aplicando CSS solamente a un componente</h1>
    <div class="row">
      <div class="col m-1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus arcu imperdiet faucibus dictum. Nunc ultricies velit orci, ac tincidunt ante consequat et.
          In hac habitasse platea dictumst. Curabitur vitae eros dictum, tincidunt turpis at, varius mi.
          Etiam ornare ut augue ut blandit. Vivamus rhoncus neque in neque tincidunt feugiat. Suspendisse tempus est eu ligula elementum, et consequat diam feugiat.
        </p>
      </div>
    </div>
  `,
  styles: [`
    p {
      color: red;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
