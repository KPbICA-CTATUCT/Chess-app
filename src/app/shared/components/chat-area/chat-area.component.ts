import { Component, OnInit } from '@angular/core';

import { Message } from '@core/interfaces/message.interfaces';
import { Action } from '@core/enums/action.enums';
import { ChatService } from '@core/services/chat/chat.service';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent implements OnInit {

  messages: Message[] = [
    {
      from: {
        id: '123qwe',
        username: 'User2',
        avatar: 'avatar2'
      },
      content: 'message 2 content',
      action: Action.JOINED,
      timestamp: 123456
    }, {
      from: {
        id: '123asd',
        username: 'User1',
        avatar: 'avatar1'
      },
      content: 'message 1 content',
      action: Action.JOINED,
      timestamp: 123456
    }, {
      from: {
        id: '123zxc',
        username: 'User3',
        avatar: 'avatar3'
      },
      content: 'message 3 content',
      action: Action.JOINED,
      timestamp: 123456
    }
  ];

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log(msg);
    });
  }
}