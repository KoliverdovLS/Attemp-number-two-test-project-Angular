import {Component, Input, OnInit} from '@angular/core';
import {MyUser} from '../../assets/interface-my-user';
import {textElementOfTable} from './element-of-table-text-constants';

@Component({
  selector: 'app-element-of-table',
  templateUrl: './element-of-table.component.html',
  styleUrls: ['./element-of-table.component.css']
})
export class ElementOfTableComponent implements OnInit {
  @Input() user: MyUser;
  textConstants = textElementOfTable;
  constructor() { }

  ngOnInit(): void {
  }

}
