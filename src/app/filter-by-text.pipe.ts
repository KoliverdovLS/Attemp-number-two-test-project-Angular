import { Pipe, PipeTransform } from '@angular/core';
import {MyUser} from '../assets/interface-my-user';

@Pipe({
  name: 'filterByText'
})
export class FilterByTextPipe implements PipeTransform {

  transform(value: MyUser[] = [], filterVal: string = ''): unknown {
    return value.filter((elem) => {
      return (elem.firstName + elem.lastName).includes(filterVal);
    });
  }

}
