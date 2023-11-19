import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { wait } from 'src/app/utils/wait';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private navController: NavController, private router: Router) {

  }




  public navigateToPost(data: any) {
    this.navController.setDirection('forward');
    this.router.navigate(['post'], { state: { id: data } });
  }

  public test: any = 0;
  public testeStep = 0;
  public onRefreshCallback = async ()=> {
    const self = this;

    await wait(2000);
    self.testeStep++;
    self.test = self.testeStep*100


  }
}
