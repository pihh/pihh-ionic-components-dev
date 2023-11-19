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

const declarations:any[] = [
  // Icons
  IconLoadingComponent,
  IconMenuDoubleComponent,
  IconBackComponent,
  IconLogoProgressComponent,

  // Buttons
  ButtonBackComponent,

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
    IonicModule
  ]
})
export class ComponentsModule { }
