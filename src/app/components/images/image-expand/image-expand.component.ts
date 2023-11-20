import { Component, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AnimationController, Animation } from '@ionic/angular';
import { wait } from 'src/app/utils/wait';

@Component({
  selector: 'app-image-expand',
  templateUrl: './image-expand.component.html',
  styleUrls: ['./image-expand.component.scss'],
})
export class ImageExpandComponent implements OnInit , OnDestroy {
  @ViewChild('wrapper') wrapper: any;
  @ViewChild('background') background: any;
  @ViewChild('image') image: any;
  @ViewChild('button') button: any;

  @Input() alt: string = "Silhouette of mountains"
  @Input() src: string = "https://ionicframework.com/docs/img/demos/card-media.png"
  constructor(private animationCtrl: AnimationController, private renderer: Renderer2,private router:Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if(this.clone){
          this.clone.remove()
        }
        if(this.isExpanded){
          this.close()
        }

      }
    });
   }

  ngOnInit() { }

  public isExpanded = false;
  private isAnimating = false;



  toggle($event:any) {
    $event.stopPropagation();
    $event.preventDefault();
    $event.calcelBubble=true


    if (this.isAnimating) return
    this.isAnimating = true;
    if (!this.isExpanded) {
      this.open()
    } else {
      this.close()
    }
  }

  private from: any;
  private clone:any;
  private async open() {

    const from = this.wrapper.nativeElement.getBoundingClientRect();
    const imagePos = this.image.nativeElement.getBoundingClientRect();
    const imageTo = {
      y:  -(imagePos.y - (document.documentElement.clientHeight/2 - imagePos.height/2 )),
      x:  -(imagePos.x - (document.documentElement.clientWidth/2 - imagePos.width/2))
    }

    console.log({from:imagePos.y,target:(document.documentElement.clientHeight/2 - imagePos.height/2)})


    const clone = this.image.nativeElement.cloneNode(true);
    this.clone= clone;
    document.body.appendChild(clone);
    const animationDuration = 300
    const imageAnimation = this.animationCtrl.create()
      .addElement(clone)
      .duration(animationDuration)
      .beforeAddWrite(() => {
        this.renderer.setStyle(clone, 'position', 'fixed');
        this.renderer.setStyle(clone, 'zIndex', '1');
        this.renderer.setStyle(clone, 'top', imagePos.y+'px');
        this.renderer.setStyle(clone, 'left', imagePos.x+'px');
        this.renderer.setStyle(clone, 'height', imagePos.height+'px');
        this.renderer.setStyle(clone, 'width', imagePos.width+'px');
        this.renderer.setStyle(clone, 'borderRadius', '1em');
      })
      .fromTo(
        'transform',
        `translate(0px, 0px)`,
        `translate(${imageTo.x}px, ${imageTo.y}px)`,
      )

    const backgroundAnimation = this.animationCtrl.create()
      .addElement(this.background.nativeElement)
      .duration(animationDuration)
      .beforeAddWrite(() => {
        this.renderer.setStyle(this.background.nativeElement, 'position', 'fixed');
        this.renderer.setStyle(this.background.nativeElement, 'zIndex', '1');
      })
      .fromTo(
        'transform',
        `translate(${from.x}px, ${from.top}px)`,
        `translate(0px, 0px)`,
      )
      .fromTo(
        'maxWidth',
        `${from.width}px`,
        `${document.documentElement.clientWidth}px`,
      )
      .fromTo(
        'maxHeight',
        `${from.height}px`,
        `${document.documentElement.clientHeight}px`,
      ).fromTo(
        'opacity',
        0,
        0.8
      ).onFinish(()=>{

      })
        imageAnimation.play()
    await backgroundAnimation.play()
    this.isAnimating = false
    this.isExpanded = true;
  }

  async close() {
    const from = this.wrapper.nativeElement.getBoundingClientRect();

    const animationDuration = 300;
    const clone = this.clone;
    const imagePos = this.image.nativeElement.getBoundingClientRect();
    const imageTo = {
      y:  (imagePos.y - (document.documentElement.clientHeight/2 - imagePos.height))
    }
    const imageAnimation = this.animationCtrl.create()
    .addElement(clone)
    .duration(animationDuration)

    .fromTo(
      'transform',
      `translate(0px, -${imageTo.y}px)`,
      `translate(0px, 0px)`,
    )
    const backgroundAnimation = this.animationCtrl.create()
      .addElement(this.background.nativeElement)
      .duration(animationDuration)

      .fromTo(
        'transform',
        `translate(0px, 0px)`,
        `translate(${from.x}px, ${from.top}px)`,
      )
      .fromTo(
        'maxWidth',
        `${document.documentElement.clientWidth}px`,
        `${from.width}px`,
      )
      .fromTo(
        'maxHeight',
        `${document.documentElement.clientHeight}px`,
        `${from.height}px`,
      ).fromTo(
        'opacity',
        0.8,
        0,
      )
        imageAnimation.play()
    await backgroundAnimation.play()
    this.isAnimating = false
    this.isExpanded = false;
    this.clone.remove()
  }

  ngOnDestroy() {
    console.log('onDestroy')
    if(this.clone) {
      this.clone.remove()
    }
  }

}
