import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.css']
})
export class EditUserPageComponent implements OnInit {

  id: number;
  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
