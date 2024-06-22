import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from '../websocket.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-username-page',
  templateUrl: './username-page.component.html',
})
export class UsernamePageComponent {
  username: string = '';

  constructor(
    private router: Router,
    private websocketService: WebsocketService,
    private userService: UserService
  ) {}

  connect() {
    if (this.username) {
      this.userService.setUsername(this.username);
      this.websocketService.connect(this.username);
      this.router.navigate(['/chat']);
    }
  }
}
