import {Component, OnInit} from '@angular/core';
import {UsersDataService} from '../services/users-data.service';
import {MyUser} from '../../assets/interface-my-user';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [UsersDataService],
})
export class MainPageComponent implements OnInit {
  usersArr: Observable<MyUser[]>;
  constructor(private usersDataService: UsersDataService) {
    this.usersArr = this.usersDataService.getUsers();
  }

  ngOnInit(): void {
  }

}
