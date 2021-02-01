import { Component } from '@angular/core';
import {MyUser} from '../../assets/interface-my-user';
import {UsersDataService} from '../services/users-data.service';

interface Name {
  first: string;
  last: string;
}


@Component({
  selector: 'app-add-user-page',
  templateUrl: './add-user-page.component.html',
  styleUrls: ['./add-user-page.component.css'],
  providers: [UsersDataService],
})
export class AddUserPageComponent {
  user: MyUser;
  test: string;
  fullName: string;
  email: string;
  userStatus: 'Active' | 'Inactive';
  dateLastActive: string;
  paidStatus: 'Paid' | 'Unpaid' | 'Overdue';
  datePaid: string;
  amount: string;
  personalInfo: string;

  constructor(private usersDataService: UsersDataService) { }

  getFirsAndLastName(fullName: string): Name {
    const indexSpace: number = fullName.indexOf(' ');
    if (indexSpace === -1) {
      return {
        first: fullName,
        last: '',
      };
    }
    return {
      first: fullName.slice(0, indexSpace),
      last: fullName.slice(indexSpace + 1),
    };
  }

  addUser(): void {
    const name: Name = this.getFirsAndLastName(this.fullName);
    const user: MyUser = {
      firstName: name.first,
      lastName: name.last,
      email: this.email,
      userStatus: this.userStatus,
      lastLogin: 'Last login:' + this.dateLastActive,
      paymentStatus: this.paidStatus,
      paymentPrefix: this.paidStatus + 'on',
      date: this.datePaid,
      amount: Number(this.amount),
      id: 20,
      personalInfo: this.personalInfo,
    };
    this.usersDataService.addUser(user);
  }
}
