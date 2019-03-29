import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../../models/Message';
import { ClientsService } from '../../services/clients.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {
  messages: Message[];
  newMessage: Message = {
    msg: '',
    user: '',
    date: null
  };

  constructor(
    private messageService: MessagesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.messageService.getMessages().subscribe(msgs => (this.messages = msgs));
    this.authService
      .getAuth()
      .subscribe(user => (this.newMessage.user = user.email));
  }

  onSubmit(): void {
    this.newMessage.date = new Date();
    this.messageService.addMessage(this.newMessage);
    this.newMessage.msg = '';
  }
}
