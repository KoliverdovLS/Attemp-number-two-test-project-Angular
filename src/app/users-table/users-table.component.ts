import {Component, EventEmitter, Input, Output} from '@angular/core';
import {textConstThead} from './user-table-text-constants';
import {MyUser} from '../../assets/interface-my-user';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {
  @Input() usersArr: MyUser[];
  @Output() outputUserDelete: EventEmitter<number> = new EventEmitter<number>();
  textConstans = textConstThead;
  constructor() {}

  deleteUser(id: number): void {
    this.outputUserDelete.emit(id);
  }

}
