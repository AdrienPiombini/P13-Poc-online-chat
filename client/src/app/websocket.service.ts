import { Injectable } from '@angular/core';
import { Client, IMessage, IFrame } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private stompClient: Client | null = null;
  private messageSubject: Subject<any> = new Subject<any>();

  connect(username: string) {
    const socket = new SockJS('/api/chat');
    this.stompClient = new Client({
      webSocketFactory: () => socket,
      debug: (str) => {
        console.log(str);
      },
      onConnect: (frame: IFrame) => {
        console.log('Connected: ' + frame);
        this.stompClient?.subscribe('/topic/public', (message: IMessage) => {
          this.messageSubject.next(JSON.parse(message.body));
        });

        this.stompClient?.publish({
          destination: '/app/chat.addUser',
          body: JSON.stringify({ sender: username, type: 'JOIN' }),
        });
      },
      onStompError: (frame: IFrame) => {
        console.error('Error: ' + frame.headers['message']);
        console.error('Details: ' + frame.body);
      },
    });
    this.stompClient.activate();
  }

  sendMessage(chatMessage: any) {
    if (this.stompClient) {
      this.stompClient.publish({
        destination: '/app/chat.sendMessage',
        body: JSON.stringify(chatMessage),
      });
    }
  }

  getMessages() {
    return this.messageSubject.asObservable();
  }
}
