import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,

} from '@angular/core';
import {MyUser} from '../../assets/interface-my-user';
import {UsersDataService} from '../services/users-data.service';

@Component({
  selector: 'app-list-and-bar-container',
  templateUrl: './list-and-bar-container.component.html',
  styleUrls: ['./list-and-bar-container.component.css'],
  providers: [UsersDataService],
})
export class ListAndBarContainerComponent implements OnInit {
  @Input() usersArr: MyUser[];
  @Output() outputUsersData = new EventEmitter<MyUser[]>();
  @Output() outputFilterVal = new EventEmitter<string>();
  visibilityDeletePopup = false;
  filterVal = '';
  idToDelete: number;
  constructor(private usersDataService: UsersDataService) { }
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

  openDeleteUserPopup(id: number): void {
    this.idToDelete = id;
    this.visibilityDeletePopup = true;
  }

  closeDeleteUserPopup(): void {
    this.visibilityDeletePopup = false;
  }

  deleteUser(): void {
    this.usersArr = this.usersArr.filter((user) => user.id !== this.idToDelete);
    this.outputUsersData.emit(this.usersArr);
    this.usersDataService.deleteUser(this.idToDelete);
  }
  ngOnInit(): void {
    setTimeout(() => this.sendUsersData(), 20);
  }


}
