import {Component, Input} from '@angular/core';
import {MyUser} from '../../assets/interface-my-user';

@Component({
  selector: 'app-amount-sum',
  templateUrl: './amount-sum.component.html',
  styleUrls: ['./amount-sum.component.css']
})

export class AmountSumComponent {
  @Input() usersArr: MyUser[];
  constructor() { }
}
