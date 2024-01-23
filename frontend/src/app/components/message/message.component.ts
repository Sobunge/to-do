import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  @ViewChild('toastTriggerBtn') toastTriggerBtn!: ElementRef;
  @ViewChild('toastLiveExample') toastLiveExample!: ElementRef;

  showToast() {
    if (this.toastTriggerBtn && this.toastLiveExample) {
      const toastTrigger = this.toastTriggerBtn.nativeElement;
      const toastLiveExample = this.toastLiveExample.nativeElement;

      const toastBootstrap = new bootstrap.Toast(toastLiveExample);
      toastBootstrap.show();
    }
  }

}