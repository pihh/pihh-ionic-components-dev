import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss'],
})
export class HeaderUserComponent  implements OnInit {

  constructor( private navController: NavController, private router: Router ) {  }

  navigateSettings() {
    console.log({navController:this.navController})
      this.navController.setDirection('forward');
      this.router.navigate(['settings']);
  }

  ngOnInit() {}

}
