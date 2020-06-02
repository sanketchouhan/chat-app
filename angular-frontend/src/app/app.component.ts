import { Component } from '@angular/core';
import { slideInAnimation } from './animations';
import { ChatService } from './service/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {

  toShow: boolean = false;

  constructor(private _chatService: ChatService) {
    this._chatService.overlay.subscribe((data) => {
      this.toShow = data;
    });
  }

}
