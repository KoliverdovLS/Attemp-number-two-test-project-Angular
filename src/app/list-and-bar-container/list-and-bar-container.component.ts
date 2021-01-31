import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyUser} from '../../assets/interface-my-user';

@Component({
  selector: 'app-list-and-bar-container',
  templateUrl: './list-and-bar-container.component.html',
  styleUrls: ['./list-and-bar-container.component.css'],
})
export class ListAndBarContainerComponent implements OnInit {
  @Input() usersArr: MyUser[];
  @Output() outputUsersData = new EventEmitter<any>();
  @Output() outputFilterVal = new EventEmitter<any>();
  filterVal = '';
  constructor() { }
  setFilterVal(filterVal: string): void {
    this.filterVal = filterVal;
    this.sendFilterVal();
  }
  sendUsersData(): void {
    this.outputUsersData.emit(this.usersArr);
  }
  sendFilterVal(): void {
    this.outputFilterVal.emit(this.filterVal);
  }
  ngOnInit(): void {
    setTimeout(() => this.sendUsersData(), 0);
  }
}
