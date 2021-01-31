import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyUser} from '../../../assets/interface-my-user';

@Component({
  selector: 'app-view-more-popup',
  templateUrl: './view-more-popup.component.html',
  styleUrls: ['./view-more-popup.component.css']
})
export class ViewMorePopupComponent implements OnInit {
  @Input() user: MyUser;
  @Input() visionPopupViewMore: boolean;
  @Output() outputVisibilityPopup = new EventEmitter<boolean>();
  @Output() userToDelete = new EventEmitter<MyUser>();
  unvisionPopupDeleteUser = true;
  constructor() { }

  ngOnInit(): void {
  }

  hidePopup(): void {
    this.outputVisibilityPopup.emit(false);
  }

  openDeletePopup(): void {
    this.unvisionPopupDeleteUser = false;
  }
  closeDeletePopup(): void {
    this.unvisionPopupDeleteUser = true;
  }

  sendUsedToDelete(user: MyUser): void {
    this.userToDelete.emit(user);
  }

}
