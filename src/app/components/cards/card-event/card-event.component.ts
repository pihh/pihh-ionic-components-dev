import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss'],
})
export class CardEventComponent  implements OnInit {
  @Input() inline: boolean = false;
  constructor() { }

  ngOnInit() {}

}
