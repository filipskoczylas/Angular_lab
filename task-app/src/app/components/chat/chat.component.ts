import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
import { Message } from '../../models/message';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(
    private router: Router,
    private httpService: HttpService,
    protected authService: AuthService,
    protected chatService: ChatService
  ) {
    this.chatService.websocketOpen();
    this.chatService.getUsers();
  }

  ngOnInit() {
  }


  sendMessage(messageText: string) {
    if (this.chatService.selectedUser && messageText.length > 0){
      this.httpService.sendMessages(new Message(this.chatService.selectedUser.userId, messageText)).subscribe({
        next: (data) => {
        },
        error: (error) => {
        }
      });
    }
  }
}
