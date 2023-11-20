import { Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AnimationController, Animation } from '@ionic/angular';
import { convertRemToPixels } from 'src/app/utils/rem_to_px';
import { wait } from 'src/app/utils/wait';

const MAIN_ANIMATION_DURATION = 100

@Component({
  selector: 'app-image-background-expand',
  templateUrl: './image-background-expand.component.html',
  styleUrls: ['./image-background-expand.component.scss'],
})
export class ImageBackgroundExpandComponent implements OnInit {
  @ViewChild('wrapper') wrapper: any;
  @ViewChild('background') background: any;
  @ViewChild('image') image: any;
  @ViewChild('button') button: any;

  @Input() alt: string = "Silhouette of mountains"
  @Input() src: string = "https://ionicframework.com/docs/img/demos/card-media.png"

  @Input() minHeight: string = "200px";
  @Output() onComplete: EventEmitter<any> = new EventEmitter();

  private toggleAnimation: any;
  constructor(private animationCtrl: AnimationController, private renderer: Renderer2, private router: Router) {
    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationEnd) {
        this.cleanup()
        if (this.isExpanded) {
          this.close()
        }
      }
    });
  }

  ngOnInit() {

  }

  public isExpanded = false;
  private isAnimating = false;

  private async open() {
    this.cleanup();
    const computedPositionResizeAnimation = this.computeResizeAnimation(this.wrapper.nativeElement, document.documentElement);


    // Clone stuff
    const clone = this.image.nativeElement.cloneNode(true);
    const rem = convertRemToPixels(1)
    const scalePercentage = (document.documentElement.getBoundingClientRect().width - (rem * 2)) / this.wrapper.nativeElement.getBoundingClientRect().width;
    const targetY = (document.documentElement.getBoundingClientRect().height/2) - (this.wrapper.nativeElement.getBoundingClientRect().height*scalePercentage/2)
    const targetX = (document.documentElement.getBoundingClientRect().width/2) - (this.wrapper.nativeElement.getBoundingClientRect().width*scalePercentage/2)
    const cloneTranslate = {
      original:{

        x: -computedPositionResizeAnimation.initialPosition.x + 'px',
        y: -computedPositionResizeAnimation.initialPosition.y + 'px'
      },
      target:{
        x: 0+'px',
        y: -(targetY - this.wrapper.nativeElement.getBoundingClientRect().y)+'px'
      }
    }

    const cloneTransformFrom = `translate(${cloneTranslate.original.x},${cloneTranslate.original.y})`

    const backgroundAnimation: Animation = this.animationCtrl
      .create()
      .addElement(this.background.nativeElement)
      .duration(MAIN_ANIMATION_DURATION)
      .beforeAddWrite(() => {
        this.renderer.setStyle(this.background.nativeElement, 'position', 'fixed')
        this.renderer.setStyle(this.background.nativeElement, 'top', computedPositionResizeAnimation.initialPosition.y + 'px')
        this.renderer.setStyle(this.background.nativeElement, 'left', computedPositionResizeAnimation.initialPosition.x + 'px')
        this.renderer.setStyle(this.background.nativeElement, 'zIndex', 100);

        clone.classList.add('pc-clone')


        this.renderer.setStyle(clone, 'position', 'fixed')
        this.renderer.setStyle(clone, 'borderRadius', "1em")
        this.renderer.setStyle(clone, 'top', computedPositionResizeAnimation.initialPosition.y + 'px')
        this.renderer.setStyle(clone, 'left', computedPositionResizeAnimation.initialPosition.x + 'px')
        this.renderer.setStyle(clone, 'maxWidth', computedPositionResizeAnimation.initialPosition.width + 'px')
        this.renderer.setStyle(clone, 'maxHeight', computedPositionResizeAnimation.initialPosition.height + 'px')
        this.renderer.setStyle(clone, 'transform', `translate(${cloneTranslate.original.x},${cloneTranslate.original.y})`)
        this.background.nativeElement.appendChild(clone);

      })
      .fromTo(
        'transform',
        `translate(${computedPositionResizeAnimation.translate.translateX[0]},${computedPositionResizeAnimation.translate.translateY[0]})`,
        `translate(${computedPositionResizeAnimation.translate.translateX[1]},${computedPositionResizeAnimation.translate.translateY[1]})`,
      )
      .fromTo(
        'borderRadius',
        `1em`,
        `0`,
      )
      .fromTo(
        'maxWidth',
        computedPositionResizeAnimation.width.from,
        computedPositionResizeAnimation.width.to
      )
      .fromTo(
        'maxHeight',
        computedPositionResizeAnimation.height.from,
        computedPositionResizeAnimation.height.to
      )


    const cloneTranslateY = (targetY - computedPositionResizeAnimation.initialPosition.y) +'px'
    const cloneTranslateX = (targetX - computedPositionResizeAnimation.initialPosition.x) +'px'

    const cloneAnimation = this.animationCtrl.create()
      .addElement(clone)
      .duration(MAIN_ANIMATION_DURATION)
      .fromTo(
        'transform',
        cloneTransformFrom,
        `translate(${cloneTranslateX},${cloneTranslateY})`,
      ).fromTo(
        'borderRadius',
        '1em',
        '0em'
      )
      .fromTo(
        'maxWidth',
        (computedPositionResizeAnimation.initialPosition.width) +'px',
        (computedPositionResizeAnimation.initialPosition.width *scalePercentage) +'px'
      )
      .fromTo(
        'maxHeight',
        (computedPositionResizeAnimation.initialPosition.height) +'px',
        (computedPositionResizeAnimation.initialPosition.height *scalePercentage) +'px'
      )


    this.toggleAnimation = this.animationCtrl.create().addAnimation([cloneAnimation,backgroundAnimation]).duration(MAIN_ANIMATION_DURATION)
    await this.toggleAnimation.play()
    this.isExpanded = true;
    this.onToggleComplete()
  }
  private async close() {
    await this.toggleAnimation.direction('reverse').onFinish(()=>{
        this.renderer.setStyle(this.background.nativeElement, 'position', 'absolute')
        // this.renderer.setStyle(this.background.nativeElement, 'top', computedPositionResizeAnimation.initialPosition.y + 'px')
        // this.renderer.setStyle(this.background.nativeElement, 'left', computedPositionResizeAnimation.initialPosition.x + 'px')
        this.renderer.setStyle(this.background.nativeElement, 'zIndex', -1);
    }).play()

    this.isExpanded = false
    this.toggleAnimation = null;
    this.onToggleComplete()
  }

  public toggle($event: any) {

    $event.stopPropagation();
    $event.preventDefault();
    $event.calcelBubble = true

    if (this.isAnimating) return
    this.isAnimating = true;
    if (!this.isExpanded) {
      this.open()
    } else {
      this.close()
    }
  }

  private onToggleComplete() {
    this.isAnimating = false;
    this.onComplete.emit()
  }

  // Calculations
  private computePosition($element: any) {
    const bounds = $element.getBoundingClientRect();
    const position = {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height
    }
    return position
  }

  private computeResizeAnimation($initialElement: any, $targetElement: any) {
    const $initialPosition = this.computePosition($initialElement);
    const $targetPosition = this.computePosition($targetElement);

    const heightArgument = "maxHeight";//$initialPosition.height > $targetPosition.height ? 'minHeight': 'maxHeight';
    const widthArgument = "maxWidth";//$initialPosition.width > $targetPosition.width ? 'minWidth': 'maxWidth';

    const width = {
      argument: widthArgument,
      //argumentReset: widthArgument === 'minWidth' ? 'maxWidth' : 'minWidth',
      from: $initialPosition.width + 'px',
      to: $targetPosition.width + 'px',
    }
    const height = {
      argument: heightArgument,
      //argumentReset: heightArgument === 'minHeight' ? 'maxHeight' : 'minHeight',
      from: $initialPosition.height + 'px',
      to: $targetPosition.height + 'px',
    }

    const translate = {
      argument: 'transform',
      translateX: ["0px", - ($initialPosition.x - $targetPosition.x) + 'px'],
      translateY: ["0px", - ($initialPosition.y - $targetPosition.y) + 'px'],
    }

    return {
      initialPosition: $initialPosition,
      width: width,
      height: height,
      translate: translate,
    }
  }

  private computeResizeImage($initialElement: any) {
    const $initialElementPosition = $initialElement.nativeElement.getBoundingClientRect()
    const rem = convertRemToPixels(1)
    const finalWidthPercentage = document.documentElement.getBoundingClientRect().width - (rem * 2) / $initialElementPosition.width;
    const translateX = rem - $initialElementPosition.x;

    return {
      initialPosition: $initialElementPosition,

    }

  }

  private cleanup() {
    for (let clone of [...this.background.nativeElement.querySelectorAll('.pc-clone')]) {
      clone.remove()
    }
  }
}
