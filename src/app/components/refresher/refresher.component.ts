import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonRefresher, IonRefresherContent } from '@ionic/angular';
import { wait } from 'src/app/utils/wait';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.component.html',
  styleUrls: ['./refresher.component.scss'],
})
export class RefresherComponent implements OnInit {
  @ViewChild(IonRefresher, { read: ElementRef }) private refresherElement: any;
  @ViewChild(IonRefresherContent, { read: ElementRef }) private refresherContentElement: any;


  @Input() refreshCallback: any;

  @Output() onStart: EventEmitter<any> = new EventEmitter();
  @Output() onProgress: EventEmitter<any> = new EventEmitter();
  @Output() onRefreshStart: EventEmitter<any> = new EventEmitter();
  @Output() onComplete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public updateProgress(progress:number = 0){
    progress = Math.max(0,Math.min(1,progress))


    this.progress = progress;

  }

  public progress: any = 0;
  public isRefreshing: boolean = false;

  public onIonRefreshStart($event?: any) {
    if (this.isRefreshing) return;
    console.log('onStart')
    this.updateProgress( 0);
    this.onStart.emit()
  }
  public async onIonRefresh($event: any) {
    this.refresherContentElement.nativeElement.style.opacity = 'inherit'
    try {
      if (this.refreshCallback) {
        await this.refreshCallback();
      } else {
        await wait(200);
      }
    } catch (ex) {

    }

    this._onComplete()
  }

  _onComplete() {

    this.updateProgress(0)
    this.refresherContentElement.nativeElement.style.opacity = 'inherit'
    this.isRefreshing = false;
    this.refresherElement.nativeElement.complete();
    this.onComplete.emit();
  }


  public onIonRefreshPull($event: any) {

    if (this.isRefreshing) return;


    const onRefreshLookup = async (first: any = false) => {
      try {
        if (first) {
          this.isRefreshing = true;
          await wait(10)
        }
        await wait(100)
        const $classList = this.refresherElement.nativeElement.classList;
        if ($classList.contains('refresher-active')) {

          const progress = await this.refresherElement.nativeElement.getProgress();

          this.onProgress.emit(this.progress);
          if(!$classList.contains('refresher-completing') && !$classList.contains('refresher-refreshing')){
            this.updateProgress(progress);

          }else{
            if($classList.contains('refresher-refreshing')){
              this.updateProgress(1);
            }else{
              this.updateProgress(0);
            }
          }
          this.refresherContentElement.nativeElement.style.opacity = this.progress;
          onRefreshLookup();
          return;
        } else {
          this._onComplete()
          return;
        }
      } catch (ex) {
        this._onComplete()
        return;
      }
    }

    onRefreshLookup(true);

  }

}
