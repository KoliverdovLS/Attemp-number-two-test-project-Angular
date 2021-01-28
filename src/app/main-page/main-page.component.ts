import {Component, OnInit} from '@angular/core';
import {UsersDataService} from '../services/users-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [UsersDataService],
})
export class MainPageComponent implements OnInit {
  users;
  constructor(private usersDataService: UsersDataService) {}

  ngOnInit(): void {
    this.usersDataService.getUsers().subscribe(data => console.log(data));
  }

}
