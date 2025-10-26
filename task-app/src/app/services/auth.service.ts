import { Injectable } from '@angular/core';
import { map, throwError } from 'rxjs';
import { User } from '../models/user';
import { UserLoginApiResponse } from '../models/user-api-response';
import { UserAuth } from '../models/user-auth';
import { HttpService } from './http.service';


@Injectable(
  { providedIn: "root" }
)
export class AuthService {

  user: User| null = null;

  constructor(private httpService: HttpService) {
  }

  login(user: UserAuth) {
    return this.httpService.login(user)
      .pipe(map(data => {
        if (data.hasOwnProperty("loggedIn")) {
          let responseData = data as UserLoginApiResponse;
          if (responseData.loggedIn === true) {
            this.user = new User(responseData.userId, responseData.userName);
            return true;
          } else {
            this.user = null;
            return false;
          }
        }
        else {
          throwError(() => new Error(JSON.stringify(data)));
          return false;
        }
      })
      )
  }

  isLoggedIn() {
    return this.httpService.user()
      .pipe(map(data => {
        if (data.hasOwnProperty("loggedIn")) {
          let responseData = data as UserLoginApiResponse;
          if (responseData.loggedIn === true) {
            this.user = new User(responseData.userId, responseData.userName);
            return true;
          } else {
            this.user = null;
            return false;
          }
        }
        else {
          throwError(() => new Error(JSON.stringify(data)));
          return false;
        }
      })
      )
  }

  logout() {
    // TODO: 3
  }
}
