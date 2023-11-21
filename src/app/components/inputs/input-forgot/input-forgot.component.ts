import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-input-forgot',
  templateUrl: './input-forgot.component.html',
  styleUrls: ['./input-forgot.component.scss'],
})
export class InputForgotComponent  implements OnInit {
  @ContentChild(IonInput) input: IonInput| any;

  ngOnInit() {}

}
