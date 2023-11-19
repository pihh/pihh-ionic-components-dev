import { Component, OnInit } from '@angular/core';
import { wait } from 'src/app/utils/wait';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  public expanded: boolean = true;
  public isLoadingShowing: boolean = true;

  private isTransitioning: boolean = false;
  private animate(callback: any) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    callback();
  }
  async shrink() {
    if(this.expanded) return
    this.animate(async () => {
      this.isLoadingShowing = true;
      await wait(50);
      this.expanded = true;
    });
  }
  async expand() {
    if(!this.expanded) return
    this.animate(async () => {
      this.expanded = false;
      await wait(50);
      this.isLoadingShowing = false;
    });
  }

  public onTransitionEnd() {
    this.isTransitioning = false;
  }
}
