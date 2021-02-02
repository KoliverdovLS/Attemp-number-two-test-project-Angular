import {Component, Input, Output} from '@angular/core';
import { topBarTextConstants } from './top-bar-text-constants';
import {EventEmitter} from '@angular/core';
import {MyUser} from '../../assets/interface-my-user';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Input() usersArr: MyUser[];
  textConst = topBarTextConstants;
  filterVal: string;
  @Output() filterValChanged: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  filterValChange(): void {
    this.filterValChanged.emit(this.filterVal);
  }

  getLastId(): number {
    if (!this.usersArr) {
      return;
    }
    return this.usersArr[this.usersArr.length - 1].id;
  }
}
