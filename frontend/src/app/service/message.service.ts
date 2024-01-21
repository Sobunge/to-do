import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string[] = []; 

  constructor() { }

  add(message: string): void{
    this.message.push(message);
  }

  clear(): void{  
    this.message = [];
  }
}
