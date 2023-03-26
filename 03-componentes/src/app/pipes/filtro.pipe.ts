import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arrayOfItems: any[], text: string = '', column: string = 'title'): any[] {

    if (text === '') {
      return arrayOfItems;
    }

    if (!arrayOfItems) {
      return arrayOfItems;
    }

    text = text.toLocaleLowerCase();

    return arrayOfItems.filter(item => item[column].toLowerCase().includes(text)
    );
  }

}
