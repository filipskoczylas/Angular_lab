import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuth } from '../models/user-auth';
import { Message } from '../models/message';

const URL = "/api"

@Injectable({
  providedIn: 'root'
})  
export class HttpService {

  constructor(private http: HttpClient) { }

  testLogin() {
    return this.http.get(URL + "/login-test");
  }

  register(user: UserAuth) {
    return this.http.post(URL + "/users/register", user);
  }

  login(user: UserAuth) {
    return this.http.post(URL + "/users/login", user);
  }

  logout() {
    return this.http.get(URL + "/users/logout");
  }

  user() {
    return this.http.get(URL + "/users/user");
  }

  getUsers() {
    return this.http.get(URL + "/users");
  }

  getMessages(id: number) {
    return this.http.get(URL + `/messages/${id}`);
  }

  sendMessages(mes: Message) {
    return this.http.post(URL + '/messages/', mes);
  }
}
