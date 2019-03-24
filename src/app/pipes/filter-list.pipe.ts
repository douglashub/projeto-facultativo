import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterListPipe implements PipeTransform {
  transform(items: any, term: string): any {
    if (term === undefined) {
      return items;
    }

    return items.filter((item: any) =>
      Object.keys(item).some(
        k =>
          item[k] != null &&
          item[k]
            .toString()
            .toLowerCase()
            .includes(term.toLowerCase())
      )
    );
  }
}
