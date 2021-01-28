import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AmountSumComponent } from './amount-sum/amount-sum.component';
import { ListAndBarContainerComponent } from './list-and-bar-container/list-and-bar-container.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { ElementOfTableComponent } from './element-of-table/element-of-table.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AmountSumComponent,
    ListAndBarContainerComponent,
    TopBarComponent,
    UsersTableComponent,
    ElementOfTableComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
