import { Component, OnInit } from '@angular/core';
import {textConstThead} from './user-table-text-constants';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  textConstans = textConstThead;
  constructor() {}

  ngOnInit(): void {
  }

}
