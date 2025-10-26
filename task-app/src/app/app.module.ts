import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChatComponent } from './components/chat/chat.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ChatSvgComponent } from './components/icons/chat-svg.component';
import { SendSvgComponent } from './components/icons/send-svg.component';
import { UserOnlineSvgComponent } from './components/icons/user-online.component';
import { UserOfflineSvgComponent } from './components/icons/user-offline-svg.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ChatUserListComponent } from './components/chat-user-list/chat-user-list.component';
import { ChatMessageListComponent } from './components/chat-message-list/chat-message-list.component';
import { RouterModule } from '@angular/router';
import { UserSortPipe } from './pipes/user-sort.pipe';
import { ScrollIntoViewDirective } from './directives/scroll-into-view.directive';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    AsyncPipe,
    RouterModule,
  ],
  declarations: [
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ChatComponent,
    ChatUserListComponent,
    ChatMessageListComponent,
    ChatSvgComponent,
    SendSvgComponent,
    UserOnlineSvgComponent,
    UserOfflineSvgComponent,
    UserSortPipe,
    ScrollIntoViewDirective,
  ],
  exports: [
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
