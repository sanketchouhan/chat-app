import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _chatService: ChatService) {
    this._chatService.overlay.subscribe((data) => {
      this.toShow = data;
    });
  }

  toShow: boolean = false;

}
