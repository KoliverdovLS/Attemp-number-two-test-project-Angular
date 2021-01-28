import { Component, OnInit } from '@angular/core';
import { topBarTextConstants } from './top-bar-text-constants';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  textConst = topBarTextConstants;
  constructor() { }

  ngOnInit(): void {
  }

}
