import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-icon-logo-progress',
  templateUrl: './icon-logo-progress.component.html',
  styleUrls: ['./icon-logo-progress.component.scss'],
})
export class IconLogoProgressComponent  implements OnChanges  {
  @ViewChild("svg") svg: any;

  @Input() progress:any =0;
  constructor() { }


  ngOnChanges(changes: SimpleChanges) {

    try{

      this.svg.nativeElement.setAttribute('y', (this.progress*100)+'%')
    }catch(ex){

    }
  }

}
