import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.scss']
})
export class ChatUserListComponent {

  @Input() users: User[] = [];
  @Input() selectedUser: User | null = null;
  @Output() userClicked: EventEmitter<User> = new EventEmitter();
  
  searchText: string = ""
  
  constructor() { }

}
