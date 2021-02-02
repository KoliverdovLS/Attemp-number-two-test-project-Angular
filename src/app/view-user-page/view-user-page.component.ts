import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-user-page',
  templateUrl: './view-user-page.component.html',
  styleUrls: ['./view-user-page.component.css']
})
export class ViewUserPageComponent {
  id: number;
  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params.id;
  }
}
