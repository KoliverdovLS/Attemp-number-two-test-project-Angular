import {Component, Output} from '@angular/core';
import { topBarTextConstants } from './top-bar-text-constants';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent{
  textConst = topBarTextConstants;
  filterVal: string;
  @Output() filterValChanged: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  filterValChange(): void {
    this.filterValChanged.emit(this.filterVal);
  }

}
