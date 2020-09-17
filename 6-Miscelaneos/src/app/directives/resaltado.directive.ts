import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef ) {
    console.log('resaltado directive runs!');
  }

  @Input('appResaltado') backgroundColor: string;

  @HostListener('mouseenter') mouseEnter(){
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  @HostListener('mouseleave') mouseLeave(){
    this.el.nativeElement.style.backgroundColor = '';
  }

}
