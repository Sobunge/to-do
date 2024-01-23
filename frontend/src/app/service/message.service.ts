import { Injectable } from '@angular/core';
import { Message } from '../modal/message';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private showToastSubject = new Subject<Message>();

  showToast$ = this.showToastSubject.asObservable();

  triggerToast(message: Message) {
    this.showToastSubject.next(message);
  }
}
