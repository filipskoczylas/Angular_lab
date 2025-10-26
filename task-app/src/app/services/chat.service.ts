import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { HttpService } from './http.service';
import { Message } from '../models/message';
import { WebSocketApiMessage } from '../models/user-login-api-response';
import { DataApiResponse } from '../models/user-api-response';

const WEBSOCKET_STATUS_USER_LOGIN = 1
const WEBSOCKET_STATUS_USER_LOGOUT = 2
const WEBSOCKET_STATUS_MESSAGE_SENT = 3
const WEBSOCKET_STATUS_MESSAGE_NEW = 4


@Injectable(
  { providedIn: "root" }
)
export class ChatService {

  users: User[] = [];
  selectedUser: User | null = null;
  messagesWithSelectedUser: Message[] = [];

  ws: any;

  constructor(private httpService: HttpService, private router: Router) {

  }

  public selectUser(user: User) {
    this.selectedUser = user;
    this.getMessagesWithUser();
  }

  public getMessagesWithUser() {
    if (this.selectedUser) {
      // TODO: 10
    }
  }

  public getUsers() {
    this.httpService.getUsers().subscribe({
      next: (data) => {
        if (data.hasOwnProperty("data")) {
          let responseData = data as DataApiResponse<User>;
          if (Array.isArray(responseData.data)) {
            this.users = responseData.data;
          }
        }
      },
      error: (error) => {
      }
    });
  }

  public websocketOpen() {
    this.ws = new WebSocket(`ws://${location.host}/websocket`);

    this.ws.onopen = function () {
      console.log('WebSocket open');
    };

    this.ws.onerror = function () {
      console.log('WebSocket error');
    };

    const self = this;

    this.ws.onmessage = function (msg: any) {
      const jsonMessage = JSON.parse(msg.data);
      if (jsonMessage.hasOwnProperty("status")) {
        let message = jsonMessage as WebSocketApiMessage;
        if (message) {
          
          // TODO: 11

          if (message.status == WEBSOCKET_STATUS_MESSAGE_NEW || message.status == WEBSOCKET_STATUS_MESSAGE_SENT) {
            self.getMessagesWithUser();
          }
        }
      }
    };
  }
}
