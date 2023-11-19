import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.scss'],
})
export class ButtonBackComponent  implements OnInit {

  constructor(private navController: NavController, private router: Router, private _location: Location) { }

  ngOnInit() { }

  navigateBack() {
    this.navController.setDirection('back');
    if (document.referrer) {
      this._location.back();
    } else {
      this.router.navigate([".."]);
    }
  }

}
