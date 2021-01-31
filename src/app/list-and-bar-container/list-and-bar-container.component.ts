import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,

} from '@angular/core';
import {MyUser} from '../../assets/interface-my-user';

@Component({
  selector: 'app-list-and-bar-container',
  templateUrl: './list-and-bar-container.component.html',
  styleUrls: ['./list-and-bar-container.component.css'],
})
export class ListAndBarContainerComponent implements OnInit {
  @Input() usersArr: MyUser[];
  @Output() outputUsersData = new EventEmitter<MyUser[]>();
  @Output() outputFilterVal = new EventEmitter<string>();
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

  deleteUser(id: number): void {
    this.usersArr = this.usersArr.filter((user) => user.id !== id);
    this.outputUsersData.emit(this.usersArr);
  }
  ngOnInit(): void {
    setTimeout(() => this.sendUsersData(), 20);
  }


}
