import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = true): string {

    /* const searchRegExp = /./g;
    const replaceWith = '*';

    if(!mostrar){

      return value.replace(searchRegExp, replaceWith);

    }else{

      return value;
    } */

    return ( mostrar ) ? '*'.repeat( value.length ) : value;

  }

}
