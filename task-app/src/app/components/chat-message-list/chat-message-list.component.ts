import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../../models/message';
import { User } from '../../models/user';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss']
})
export class ChatMessageListComponent {

  @Input() messages: Message[] = [];
  @Input() selectedUser: User | null = null;
  @Output() sendButtonClicked: EventEmitter<string> = new EventEmitter();
  message: string = "";

  constructor() {
   }

   sendMessage(){
      // TODO: 12
  }
}
