import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-delete-user-popup',
  templateUrl: './delete-user-popup.component.html',
  styleUrls: ['./delete-user-popup.component.css']
})
export class DeleteUserPopupComponent {
  @Output() closeDeletePopup = new EventEmitter<void>();
  @Output() deleteUserEvent = new EventEmitter<void>();
  constructor() { }

  closePopup(): void {
    this.closeDeletePopup.emit();
  }

  deleteUser(): void {
    this.deleteUserEvent.emit();
    this.closeDeletePopup.emit();
  }

}
