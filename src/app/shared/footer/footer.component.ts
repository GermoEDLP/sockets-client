import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/wesocket.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public wsSvc: WebsocketService) { }

  ngOnInit(): void {
  }

}
