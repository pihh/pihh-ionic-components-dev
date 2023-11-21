import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ios-page-section',
  templateUrl: './ios-page-section.component.html',
  styleUrls: ['./ios-page-section.component.scss'],
})
export class IosPageSectionComponent  implements OnInit {
  @Input() sticky: boolean = false;
  @Input() flex: boolean = false;
  @Input() marginTop: boolean = false;
  constructor() { }

  ngOnInit() {}

}
