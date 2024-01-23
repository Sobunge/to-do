import { NgIf } from '@angular/common';
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { Subscription } from 'rxjs';
import { Message } from '../../modal/message';

declare var bootstrap: any;

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NgIf],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnDestroy {

  @ViewChild('toastLiveExample') toastLiveExample!: ElementRef;

  private subscription: Subscription;
  public message: Message = new Message();

  constructor(public messageService: MessageService) {
    this.subscription = this.messageService.showToast$.subscribe((message) => {
      this.message = message;
      this.showNotificationToast();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showNotificationToast() {
    if (this.toastLiveExample) {
      const toastLiveExample = this.toastLiveExample.nativeElement;
      const toastBootstrap = new bootstrap.Toast(toastLiveExample);
      toastBootstrap.show();
    }
  }

}