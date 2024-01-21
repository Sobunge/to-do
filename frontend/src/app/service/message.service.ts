import { Injectable } from '@angular/core';
import { Message } from '../modal/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: Message | undefined;

  constructor() { }

  successMessage(outputMessage: string): void {
    console.log('Setting success message:', outputMessage);
    this.message = new Message(outputMessage, "success");
    console.log('Message set:', this.message);
  }

  dangerMessage(outputMessage: string): void {
    this.message = new Message(outputMessage, "danger");
  }

  warningMessage(outputMessage: string): void {
    this.message = new Message(outputMessage, "warning");
  }
}
