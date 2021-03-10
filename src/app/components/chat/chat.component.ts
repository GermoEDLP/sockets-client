import { Component, OnDestroy, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  cuerpo: string;
  subs: Subscription = new Subscription();
  messages: any[] = [];
  elemento: HTMLElement;

  constructor(private chatSvc: ChatService) { }

  ngOnInit(): void {
    this.elemento = document.getElementById('chat-mensajes');
    this.subs = this.chatSvc.reciveMessage().subscribe((data)=>{
      this.messages.push(data);

      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);
    })
  }

  enviar(){
    if(this.cuerpo === ''){
      return;
    }
    this.chatSvc.sendMessage('German', this.cuerpo);
    this.cuerpo = '';

  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }



}
