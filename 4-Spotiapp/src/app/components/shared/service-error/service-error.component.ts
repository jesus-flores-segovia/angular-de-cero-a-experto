import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-error',
  templateUrl: './service-error.component.html',
})
export class ServiceErrorComponent implements OnInit {

  @Input() messageError = '';

  constructor() { }

  ngOnInit(): void {
  }

}
