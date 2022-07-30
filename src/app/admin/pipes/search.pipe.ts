import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(forms: any[], searchValue: string): any {

    if(!forms || !searchValue.trim().length){
      return forms;
    }else
    {
      return forms.filter(item =>
        item.fName.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase())
       
        )
    }
  }

}
