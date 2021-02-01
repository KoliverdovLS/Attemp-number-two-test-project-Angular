import { Pipe, PipeTransform } from '@angular/core';
import {MyUser} from '../assets/interface-my-user';

@Pipe({
  name: 'getSumAmountByUsersArr'
})
export class GetSumAmountByUsersArrPipe implements PipeTransform {

  transform(usersArr: MyUser[] = []): number {
    return usersArr.reduce((acc, {amount}) => acc + amount, 0);
  }

}
