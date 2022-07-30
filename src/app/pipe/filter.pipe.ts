import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(helpData: any, searchText: string): any {
    if(!helpData || !searchText.trim().length){
      return helpData;
    }
    else{
      return helpData.filter((helpData: { name: string; status:string; })=>
        helpData.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
        helpData.status.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        ) 
      }
  }

}
