import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IconLoadingComponent } from './icons/icon-loading/icon-loading.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { IconMenuDoubleComponent } from './icons/icon-menu-double/icon-menu-double.component';
import { HeaderUserComponent } from './header/header-user/header-user.component';
import { IconBackComponent } from './icons/icon-back/icon-back.component';
import { ButtonBackComponent } from './buttons/button-back/button-back.component';
import { HeaderBackComponent } from './header/header-back/header-back.component';
import { RefresherComponent } from './refresher/refresher.component';
import { IconLogoProgressComponent } from './icons/icon-logo-progress/icon-logo-progress.component';
import { PageTitleComponent } from './title/page-title/page-title.component';
import { HorizontalScrollComponent } from './scroll/horizontal-scroll/horizontal-scroll.component';
import { HorizontalScrollChipComponent } from './scroll/horizontal-scroll-chip/horizontal-scroll-chip.component';
import { CardEventComponent } from './cards/card-event/card-event.component';
import { ImageExpandComponent } from './images/image-expand/image-expand.component';
import { H1Component } from './text/h1/h1.component';
import { H3Component } from './text/h3/h3.component';
import { PComponent } from './text/p/p.component';
import { SmallComponent } from './text/small/small.component';
import { DateTimeAgoComponent } from './date/date-time-ago/date-time-ago.component';
import { DateComponent } from './date/date/date.component';
import { ImageBackgroundExpandComponent } from './images/image-background-expand/image-background-expand.component';
import { IosPageGroupTitleComponent } from './ios/ios-page-group-title/ios-page-group-title.component';
import { IosPageTitleComponent } from './ios/ios-page-title/ios-page-title.component';
import { IosNavigationLargeSearchComponent } from './ios/ios-navigation-large-search/ios-navigation-large-search.component';
import { IosCardSquaredSmallComponent } from './ios/ios-card-squared-small/ios-card-squared-small.component';
import { IosScrollHorizontalComponent } from './ios/ios-scroll-horizontal/ios-scroll-horizontal.component';
import { IosPageSectionComponent } from './ios/ios-page-section/ios-page-section.component';
import { IosCardPostDoubleImageComponent } from './ios/ios-card-post-double-image/ios-card-post-double-image.component';
import { RouterModule } from '@angular/router';
import { IosNavigationModalComponent } from './ios/ios-navigation-modal/ios-navigation-modal.component';
import { IosPostStatsComponent } from './ios/ios-post-stats/ios-post-stats.component';
import { IosCommentSectionComponent } from './ios/ios-comment-section/ios-comment-section.component';
import { IosCommentComponent } from './ios/ios-comment/ios-comment.component';
import { InputPasswordComponent } from './inputs/input-password/input-password.component';
import { InputForgotComponent } from './inputs/input-forgot/input-forgot.component';

const declarations:any[] = [
  // Icons
  IconLoadingComponent,
  IconMenuDoubleComponent,
  IconBackComponent,
  IconLogoProgressComponent,

  // Buttons
  ButtonBackComponent,

  // Text
  H1Component,
  H3Component,
  PComponent,
  SmallComponent,

  // Date
  DateTimeAgoComponent,
  DateComponent,

  // Header
  HeaderUserComponent,
  HeaderBackComponent,

  // Page
  PageTitleComponent,

  // Cards
  CardEventComponent,

  // Scroll
  HorizontalScrollComponent,
  HorizontalScrollChipComponent,

  // Images
  ImageExpandComponent,
  ImageBackgroundExpandComponent,

  // Inputs
  InputPasswordComponent,
  InputForgotComponent,

  // Ios
  IosPageTitleComponent,
  IosPageGroupTitleComponent,
  IosNavigationLargeSearchComponent,
  IosCardSquaredSmallComponent,
  IosCardPostDoubleImageComponent,
  IosScrollHorizontalComponent,
  IosPageSectionComponent,
  IosNavigationModalComponent,
  IosPostStatsComponent,
  IosCommentSectionComponent,
  IosCommentComponent,


  // Uncategorized
  SearchbarComponent,
  RefresherComponent
]
const exports:any[] = declarations;

@NgModule({
  declarations,
  exports:declarations,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
