import {Injectable} from '@angular/core';
import {MyUser} from '../../assets/interface-my-user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<MyUser[]> {
    return this.http.get('../../assets/my-users-arr.json').pipe(map(data => {
      /* tslint:disable-next-line */
      return data['myUserArr'];
    }));
  }
}
