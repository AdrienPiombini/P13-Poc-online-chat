import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { UserService } from '../username-page/user.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
})
export class ChatPageComponent implements OnInit {
  messages: any[] = [];
  messageContent: string = '';
  username: string = '';

  constructor(
    private websocketService: WebsocketService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.websocketService.getMessages().subscribe((message) => {
      this.username = this.userService.getUsername();
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.messageContent) {
      const chatMessage = {
        sender: this.userService.getUsername(), // Remplacez par le nom d'utilisateur actuel
        content: this.messageContent,
        type: 'CHAT',
      };
      this.websocketService.sendMessage(chatMessage);
      this.messageContent = '';
    }
  }
}
