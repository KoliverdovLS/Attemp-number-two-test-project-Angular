import { Pipe, PipeTransform } from '@angular/core';
import {MyUser} from '../assets/interface-my-user';

@Pipe({
  name: 'getSumAmountByUsersArr'
})
export class GetSumAmountByUsersArrPipe implements PipeTransform {

  transform(value: MyUser[] = []): number {
    let sum = 0;
    value.forEach(el => {
      sum += el.amount;
    });
    return sum;
  }

}
