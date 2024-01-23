import { Injectable } from '@angular/core';
import { Message } from '../modal/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: Message;

  constructor() { 
    this.message = new Message();
  }

  successMessage(outputMessage: string): Message {
    return new Message(outputMessage, "success");
  }

  dangerMessage(outputMessage: string): Message {
    return new Message(outputMessage, "danger");
  }

  warningMessage(outputMessage: string): Message {
    return new Message(outputMessage, "warning");
  }
}
