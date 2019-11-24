import { Pipe, PipeTransform } from '@angular/core';
import { ProductSearch } from '../modals';

@Pipe({
  name: 'productSearchFilter'
})
export class ProductSearchFilterPipe implements PipeTransform {

  transform(productSearchList: any, searchQuery: string): any {
    if (searchQuery == ''){
      return productSearchList
    }
    return productSearchList.filter(x => x.name.toLowerCase().indexOf(searchQuery.toLowerCase()) != -1)
  }

}
