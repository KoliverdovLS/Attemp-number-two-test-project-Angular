import {Component, Input, OnInit} from '@angular/core';
import {MyUser} from '../../assets/interface-my-user';

@Component({
  selector: 'app-list-and-bar-container',
  templateUrl: './list-and-bar-container.component.html',
  styleUrls: ['./list-and-bar-container.component.css'],
})
export class ListAndBarContainerComponent implements OnInit {
  @Input() usersArr: MyUser[];
  constructor() { }

  ngOnInit(): void {
  }

}
