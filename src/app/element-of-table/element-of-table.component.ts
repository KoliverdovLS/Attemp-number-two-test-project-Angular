import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyUser} from '../../assets/interface-my-user';
import {textElementOfTable} from './element-of-table-text-constants';

@Component({
  selector: 'app-element-of-table',
  templateUrl: './element-of-table.component.html',
  styleUrls: ['./element-of-table.component.css']
})
export class ElementOfTableComponent implements OnInit {
  visionPopupViewMore = false;
  @Input() user: MyUser;
  @Output() outputIdUsersToDelete: EventEmitter<number> = new EventEmitter<number>();
  textConstants = textElementOfTable;
  constructor() { }

  ngOnInit(): void {
  }

  sendIdUserToDelete(event: MyUser): void {
    this.outputIdUsersToDelete.emit(event.id);
  }

  openViewMorePopup(): void {
    this.visionPopupViewMore = true;
  }

  closePopup(event): void {
    this.visionPopupViewMore = event;
  }

}
