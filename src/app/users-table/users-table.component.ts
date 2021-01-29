import {Component, Input, OnInit} from '@angular/core';
import {textConstThead} from './user-table-text-constants';
import {MyUser} from '../../assets/interface-my-user';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  @Input() usersArr: MyUser[];
  textConstans = textConstThead;
  constructor() {}

  ngOnInit(): void {
  }

}
