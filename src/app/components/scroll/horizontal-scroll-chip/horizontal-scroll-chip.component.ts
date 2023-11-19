import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll-chip',
  templateUrl: './horizontal-scroll-chip.component.html',
  styleUrls: ['./horizontal-scroll-chip.component.scss'],
})
export class HorizontalScrollChipComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() outline: boolean = false;
  @Input() color:string = ""
  constructor() { }

  ngOnInit() { }

}
