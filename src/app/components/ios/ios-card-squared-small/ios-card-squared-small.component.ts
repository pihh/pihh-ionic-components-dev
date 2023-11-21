import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ios-card-squared-small',
  templateUrl: './ios-card-squared-small.component.html',
  styleUrls: ['./ios-card-squared-small.component.scss'],
})
export class IosCardSquaredSmallComponent  implements OnInit {
  @Input() imageSrc: string = "/assets/images/ios-jellyfish.png";
  constructor() { }

  ngOnInit() {}

}
