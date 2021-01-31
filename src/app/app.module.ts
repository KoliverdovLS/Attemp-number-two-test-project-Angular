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
import {FormsModule} from '@angular/forms';
import { FilterByTextPipe } from './filter-by-text.pipe';
import { GetSumAmountByUsersArrPipe } from './get-sum-amount-by-users-arr.pipe';
import { ViewMorePopupComponent } from './element-of-table/view-more-popup/view-more-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AmountSumComponent,
    ListAndBarContainerComponent,
    TopBarComponent,
    UsersTableComponent,
    ElementOfTableComponent,
    FilterByTextPipe,
    GetSumAmountByUsersArrPipe,
    ViewMorePopupComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
