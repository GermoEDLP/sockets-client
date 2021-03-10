import { Injectable } from '@angular/core';
import { WebsocketService } from './wesocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private webSvc: WebsocketService) { }

  sendMessage(to: string, cuerpo: string){

    this.webSvc.emit('mensaje', {to, cuerpo} )
  }

  reciveMessage(){
    return this.webSvc.listen('mensaje-nuevo')
  }


}
