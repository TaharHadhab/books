import {Injectable} from '@angular/core';
import {User} from '@app/models/user';
import {Observable} from 'rxjs/Observable';
import {Authentification} from '@app/models/authentification';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {empty} from 'rxjs/observable/empty';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  public authenticate(user: User): Observable<Authentification> {
    return this.http
      .post<Authentification>(environment.authenticate_url, user)
      .map(value => <Authentification>value);
  }

}
