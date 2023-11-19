import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-back',
  templateUrl: './icon-back.component.html',
  styleUrls: ['./icon-back.component.scss'],
})
export class IconBackComponent  implements OnInit {
  public icon:string = '/assets/icon/arrow-back-sharp.svg'
  constructor() { }

  ngOnInit() {}

}
