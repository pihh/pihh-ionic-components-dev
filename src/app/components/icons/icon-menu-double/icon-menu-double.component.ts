import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-menu-double',
  templateUrl: './icon-menu-double.component.html',
  styleUrls: ['./icon-menu-double.component.scss'],
})
export class IconMenuDoubleComponent  implements OnInit {

  public icon:string = '/assets/icon/menu-double-outline.svg'
  constructor() { }

  ngOnInit() {}

}
